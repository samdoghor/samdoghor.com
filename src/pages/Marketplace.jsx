import { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";
import { marketplaceProducts } from "../marketplaceProducts";

const formatPrice = (amount, currency) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount / 100);

const Marketplace = () => {
  const [email, setEmail] = useState("");
  const [activeProduct, setActiveProduct] = useState("");
  const [message, setMessage] = useState("");
  const [download, setDownload] = useState(null);

  const startCheckout = async (productId) => {
    setActiveProduct(productId);
    setMessage("");

    try {
      const response = await fetch("/api/create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, email }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to start payment.");
      }

      window.location.href = result.authorizationUrl;
    } catch (error) {
      setMessage(error.message);
      setActiveProduct("");
    }
  };

  const requestDownload = async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const reference = params.get("reference");

    if (!productId || !reference) return;

    setMessage("Verifying payment and preparing your download...");
    try {
      const response = await fetch(
        `/api/download?productId=${encodeURIComponent(productId)}&reference=${encodeURIComponent(reference)}`
      );
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to prepare download.");
      }

      setDownload(result.downloadUrl);
      setMessage("Payment verified. Your download is ready.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const hasPayment = new URLSearchParams(window.location.search).has("reference");

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet>
        <title>Marketplace | Samuel Doghor</title>
        <meta property="title" content="Marketplace | Samuel Doghor" />
        <meta property="og:title" content="Marketplace | Samuel Doghor" />
        <meta property="description" content="Apps, scripts, CAD models, and engineering files from Samuel Doghor." />
      </Helmet>

      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Marketplace</p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">Digital tools and design assets.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Buy practical apps, scripts, 3D models, CAD files, and engineering resources. Each purchase includes the formats listed on its product page.
        </p>

        {hasPayment ? (
          <section className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8 dark:border-cyan-300/30">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment complete?</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Verify the Paystack reference to unlock your purchased file.</p>
            <button type="button" onClick={requestDownload} className="mt-6 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500">
              Verify and download
            </button>
            {download ? <a className="mt-6 block font-semibold text-cyan-600 underline dark:text-cyan-300" href={download}>Download your files</a> : null}
          </section>
        ) : null}

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          {marketplaceProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900/60">
              <img className="h-56 w-full object-cover" src={product.preview} alt="" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">{product.category}</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">{product.name}</h2>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.formats.map((format) => <span key={format} className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300">.{format.toLowerCase()}</span>)}
                </div>
                <p className="mt-6 text-2xl font-black text-slate-900 dark:text-white">{formatPrice(product.priceKobo, product.currency)}</p>
                <label className="mt-6 block text-sm font-semibold text-slate-600 dark:text-slate-300" htmlFor={`${product.id}-email`}>Email for your receipt and download access</label>
                <input id={`${product.id}-email`} type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-950 dark:text-white" />
                <button type="button" onClick={() => startCheckout(product.id)} disabled={activeProduct === product.id} className="mt-4 w-full rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500 disabled:cursor-wait disabled:opacity-60">
                  {activeProduct === product.id ? "Opening Paystack..." : "Buy securely with Paystack"}
                </button>
              </div>
            </article>
          ))}
        </section>
        {message ? <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-300">{message}</p> : null}
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8"><Footer /></div>
      <ScrollToTop />
    </div>
  );
};

export default Marketplace;
