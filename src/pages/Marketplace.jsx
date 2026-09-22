import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Footer, Header, ScrollToTop } from "../Index";
import { marketplaceProducts } from "../marketplaceProducts";

const FALLBACK_RATES = { NGN: 1, USD: 0.00065, GBP: 0.0005, EUR: 0.0006 };
const CURRENCIES = [
  { code: "NGN", label: "Nigerian naira" },
  { code: "USD", label: "US dollar" },
  { code: "GBP", label: "British pound" },
  { code: "EUR", label: "Euro" },
];
const PRODUCTS_PER_PAGE = 6;

const getDetectedCurrency = () => {
  const locale = navigator.language?.toLowerCase() ?? "";
  if (locale.includes("gb") || locale.includes("uk")) return "GBP";
  if (locale.includes("us") || locale.includes("ca")) return "USD";
  if (["de", "es", "fr", "it", "nl", "pt"].some((code) => locale.startsWith(code))) return "EUR";
  return "NGN";
};

const formatPrice = (amountKobo, currency, rates) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format((amountKobo / 100) * (rates[currency] ?? 1));

const getProductMedia = (product) => [
  ...(product.images ?? []).map((url) => ({ type: "image", url })),
  ...(product.videos ?? []).map((url) => ({ type: "video", url })),
];

const ProductMedia = ({ product, index, onViewMore }) => {
  const media = getProductMedia(product);
  const activeMedia = media[index] ?? media[0];

  if (!activeMedia) return null;

  return (
    <div className="bg-slate-100 dark:bg-slate-950">
      {activeMedia.type === "image" ? (
        <img className="h-48 w-full object-cover" src={activeMedia.url} alt={product.name} />
      ) : (
        <video className="h-48 w-full object-cover" src={activeMedia.url} controls preload="metadata">
          Your browser does not support video playback.
        </video>
      )}
      {media.length > 1 ? (
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {index + 1} of {media.length}
          </span>
          <button type="button" onClick={(event) => { event.stopPropagation(); onViewMore(); }} className="rounded-lg border border-cyan-600 px-3 py-1.5 text-sm font-semibold text-cyan-600 dark:border-cyan-300 dark:text-cyan-300">
            View more
          </button>
        </div>
      ) : null}
    </div>
  );
};

ProductMedia.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    videos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
  onViewMore: PropTypes.func.isRequired,
};

const Marketplace = () => {
  const [message, setMessage] = useState("");
  const [download, setDownload] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [galleryProduct, setGalleryProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("name-asc");
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem("marketplace-currency") || getDetectedCurrency();
    } catch {
      return getDetectedCurrency();
    }
  });
  const [rates, setRates] = useState(FALLBACK_RATES);

  useEffect(() => {
    let isCurrent = true;
    fetch("https://open.er-api.com/v6/latest/NGN")
      .then((response) => (response.ok ? response.json() : null))
      .then((result) => {
        if (isCurrent && result?.rates) setRates({ ...FALLBACK_RATES, ...result.rates });
      })
      .catch(() => {});
    return () => { isCurrent = false; };
  }, []);

  const changeCurrency = (nextCurrency) => {
    setCurrency(nextCurrency);
    try { localStorage.setItem("marketplace-currency", nextCurrency); } catch { /* Storage may be unavailable. */ }
  };

  const startCheckout = (product) => {
    setMessage("");
    if (!product.paystackUrl || product.paystackUrl.startsWith("PASTE_")) {
      setMessage("This product does not have a Paystack payment link yet.");
      return;
    }
    window.location.href = product.paystackUrl;
  };

  const requestDownload = async () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("productId");
    const reference = params.get("reference");
    if (!productId || !reference) return;
    setMessage("Verifying payment and preparing your download...");
    try {
      const response = await fetch(`/api/download?productId=${encodeURIComponent(productId)}&reference=${encodeURIComponent(reference)}`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to prepare download.");
      setDownload(result.downloadUrl);
      setMessage("Payment verified. Your download is ready.");
    } catch (error) { setMessage(error.message); }
  };

  const categories = useMemo(() => [...new Set(marketplaceProducts.map((product) => product.category))].sort(), []);
  const filteredProducts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();
    const matches = marketplaceProducts.filter((product) => {
      const text = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      return (category === "all" || product.category === category) && (!searchTerm || text.includes(searchTerm));
    });
    return [...matches].sort((first, second) => {
      if (sort === "price-low") return first.priceKobo - second.priceKobo;
      if (sort === "price-high") return second.priceKobo - first.priceKobo;
      const result = first.name.localeCompare(second.name);
      return sort === "name-desc" ? -result : result;
    });
  }, [category, search, sort]);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const visibleProducts = filteredProducts.slice((page - 1) * PRODUCTS_PER_PAGE, page * PRODUCTS_PER_PAGE);
  const updateListing = (setter) => (event) => { setter(event.target.value); setPage(1); };
  const hasPayment = new URLSearchParams(window.location.search).has("reference");

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet><title>Marketplace | Samuel Doghor</title></Helmet>
      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Marketplace</p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">Digital tools and design assets.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Buy practical apps, scripts, 3D models, CAD files, and engineering resources. Each purchase includes the formats listed on its product page.</p>
        <label className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300" htmlFor="marketplace-currency">
          Display currency
          <select id="marketplace-currency" value={currency} onChange={(event) => changeCurrency(event.target.value)} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white">
            {CURRENCIES.map((option) => <option key={option.code} value={option.code}>{option.code} - {option.label}</option>)}
          </select>
        </label>

        {marketplaceProducts.length > 0 ? (
          <div className="mt-10 grid gap-4 md:grid-cols-[2fr,1fr,1fr]">
            <input type="search" value={search} onChange={updateListing(setSearch)} placeholder="Search products" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900 dark:text-white" />
            <select value={category} onChange={updateListing(setCategory)} aria-label="Filter by category" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white"><option value="all">All categories</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select>
            <select value={sort} onChange={updateListing(setSort)} aria-label="Sort products" className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 dark:border-white/10 dark:bg-slate-900 dark:text-white"><option value="name-asc">Name A-Z</option><option value="name-desc">Name Z-A</option><option value="price-low">Price low-high</option><option value="price-high">Price high-low</option></select>
          </div>
        ) : null}

        {hasPayment ? (
          <section className="mt-12 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8 dark:border-cyan-300/30">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment complete?</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Verify the Paystack reference to unlock your purchased file.</p>
            <button type="button" onClick={requestDownload} className="mt-6 rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white">Verify and download</button>
            {download ? <a className="mt-6 block font-semibold text-cyan-600 underline dark:text-cyan-300" href={download}>Download your files</a> : null}
          </section>
        ) : null}

        {marketplaceProducts.length === 0 ? (
          <p className="mt-16 text-slate-500 dark:text-slate-400">No products are available right now.</p>
        ) : visibleProducts.length === 0 ? (
          <p className="mt-16 text-slate-500 dark:text-slate-400">No products match your search.</p>
        ) : (
          <section className="mt-16 space-y-12">
            {[...new Set(visibleProducts.map((product) => product.category))].map((group) => (
              <div key={group}><h2 className="mb-5 text-2xl font-bold text-slate-900 dark:text-white">{group}</h2><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleProducts.filter((product) => product.category === group).map((product) => (
                  <article key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-900/60">
                    <ProductMedia product={product} index={0} onViewMore={() => setGalleryProduct(product)} />
                    <div className="p-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">{product.category}</p><h3 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">{product.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{product.description}</p><div className="mt-4 flex flex-wrap gap-2">{product.formats.map((format) => <span key={format} className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300">.{format.toLowerCase()}</span>)}</div><p className="mt-5 text-xl font-black text-slate-900 dark:text-white">{formatPrice(product.priceKobo, currency, rates)}</p><button type="button" onClick={(event) => { event.stopPropagation(); startCheckout(product); }} className="mt-4 w-full rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-semibold text-white">Buy securely with Paystack</button></div>
                  </article>
                ))}
              </div></div>
            ))}
          </section>
        )}
        {totalPages > 1 ? <nav className="mt-10 flex items-center justify-center gap-4" aria-label="Marketplace pagination"><button type="button" disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="rounded-lg border border-slate-200 px-4 py-2 font-semibold disabled:opacity-40 dark:border-white/10">Previous</button><span className="text-sm text-slate-500 dark:text-slate-400">Page {page} of {totalPages}</span><button type="button" disabled={page === totalPages} onClick={() => setPage((current) => current + 1)} className="rounded-lg border border-slate-200 px-4 py-2 font-semibold disabled:opacity-40 dark:border-white/10">Next</button></nav> : null}
        {message ? <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-300">{message}</p> : null}
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8"><Footer /></div><ScrollToTop />
      {galleryProduct ? <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/90 p-6" role="presentation" onClick={() => setGalleryProduct(null)}><section className="mx-auto mt-12 max-w-5xl rounded-2xl bg-white p-6 text-slate-900 dark:bg-slate-900 dark:text-white" role="dialog" aria-modal="true" aria-labelledby="gallery-title" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setGalleryProduct(null)} className="float-right rounded-lg border border-slate-200 px-3 py-1 dark:border-white/10">Close</button><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Gallery</p><h2 id="gallery-title" className="mt-3 text-3xl font-bold">{galleryProduct.name}</h2><div className="mt-6 grid gap-5 sm:grid-cols-2">{getProductMedia(galleryProduct).map((media) => media.type === "image" ? <img key={media.url} src={media.url} alt={galleryProduct.name} className="h-72 w-full rounded-lg object-cover" /> : <video key={media.url} src={media.url} controls className="h-72 w-full rounded-lg object-cover" preload="metadata" />)}</div></section></div> : null}
      {selectedProduct ? <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 p-6" role="presentation" onClick={() => setSelectedProduct(null)}><article className="mx-auto mt-12 max-w-4xl rounded-2xl bg-white p-6 text-slate-900 dark:bg-slate-900 dark:text-white" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setSelectedProduct(null)} className="float-right rounded-lg border border-slate-200 px-3 py-1 dark:border-white/10">Close</button><p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">{selectedProduct.category}</p><h2 className="mt-3 text-3xl font-bold">{selectedProduct.name}</h2><p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{selectedProduct.description}</p><div className="mt-5 flex flex-wrap gap-2">{selectedProduct.formats.map((format) => <span key={format} className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500 dark:border-white/10 dark:text-slate-300">.{format.toLowerCase()}</span>)}</div><div className="mt-6 grid gap-4 sm:grid-cols-2">{getProductMedia(selectedProduct).map((media) => media.type === "image" ? <img key={media.url} src={media.url} alt={selectedProduct.name} className="h-64 w-full rounded-lg object-cover" /> : <video key={media.url} src={media.url} controls className="h-64 w-full rounded-lg object-cover" preload="metadata" />)}</div><p className="mt-6 text-2xl font-black">{formatPrice(selectedProduct.priceKobo, currency, rates)}</p><button type="button" onClick={() => startCheckout(selectedProduct)} className="mt-5 w-full rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white">Buy securely with Paystack</button></article></div> : null}
    </div>
  );
};

export default Marketplace;