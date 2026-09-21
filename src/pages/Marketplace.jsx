import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <Helmet>
        <title>Marketplace | Samuel Doghor</title>
        <meta property="title" content="Marketplace | Samuel Doghor" />
        <meta property="og:title" content="Marketplace | Samuel Doghor" />
        <meta
          property="description"
          content="3D modeling designs and other useful digital products from Samuel Doghor."
        />
        <meta property="og:description" content="3D modeling designs and other useful digital products from Samuel Doghor." />
      </Helmet>

      <main className="mx-auto w-full max-w-6xl px-6 pb-10 pt-32 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
          Marketplace
        </p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">
          Designs for making ideas real.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          A growing collection of 3D modeling designs and digital products. The first releases are coming soon.
        </p>

        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900/60 md:p-12">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">3D modeling designs</p>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
            Explore practical models and design assets for engineering, visualization, and creative projects.
          </p>
          <a
            className="mt-8 inline-block rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-500"
            href="mailto:talkto@samdoghor.com?subject=Marketplace enquiry"
          >
            Enquire about a design
          </a>
        </section>
      </main>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Marketplace;