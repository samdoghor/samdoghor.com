import { marketplaceProducts } from "../src/marketplaceProducts.js";

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export default async function handler(request) {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  try {
    const { productId, email } = await request.json();
    const product = marketplaceProducts.find((item) => item.id === productId);

    if (!product || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return json(400, { error: "A valid product and email are required." });
    }

    const response = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: product.priceKobo,
          currency: product.currency,
          callback_url: `${process.env.SITE_URL}/marketplace?payment=success&productId=${encodeURIComponent(product.id)}`,
          metadata: { productId: product.id },
        }),
      },
    );
    const result = await response.json();

    if (!response.ok || !result.status) {
      return json(502, { error: "Unable to start payment." });
    }

    return json(200, {
      authorizationUrl: result.data.authorization_url,
      reference: result.data.reference,
    });
  } catch {
    return json(500, { error: "Unable to start payment." });
  }
}
