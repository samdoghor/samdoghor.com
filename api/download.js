import {
  S3Client,
  HeadObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { marketplaceProducts } from "../src/marketplaceProducts.js";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const s3 = new S3Client({ region: process.env.AWS_REGION });

export default async function handler(request) {
  if (request.method !== "GET") {
    return json(405, { error: "Method not allowed" });
  }

  const url = new URL(request.url);
  const product = marketplaceProducts.find(
    (item) => item.id === url.searchParams.get("productId"),
  );
  const reference = url.searchParams.get("reference");

  if (!product || !reference) {
    return json(400, {
      error: "A valid product and payment reference are required.",
    });
  }

  try {
    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` },
      },
    );
    const verification = await verifyResponse.json();
    const paidForProduct =
      verification.data?.metadata?.productId === product.id;
    const paidAmount = verification.data?.amount === product.priceKobo;

    if (
      !verifyResponse.ok ||
      !verification.data ||
      verification.data.status !== "success" ||
      !paidForProduct ||
      !paidAmount
    ) {
      return json(403, {
        error: "Payment could not be verified for this product.",
      });
    }

    const key =
      process.env[
        `PRODUCT_${product.id.toUpperCase().replaceAll("-", "_")}_S3_KEY`
      ];
    if (!key) {
      return json(503, { error: "This product file is not configured yet." });
    }

    await s3.send(
      new HeadObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }),
    );
    const downloadUrl = await getSignedUrl(
      s3,
      new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key }),
      { expiresIn: 900 },
    );

    return json(200, { downloadUrl, expiresIn: 900 });
  } catch {
    return json(500, { error: "Unable to prepare the download." });
  }
}
