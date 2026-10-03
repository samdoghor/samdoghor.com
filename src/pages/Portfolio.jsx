import { Contact, Footer, Header, Hero, Project, ScrollToTop, Service, SpotifySection, Technologies } from "../Index";
import { createPageMeta } from "../seo";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return createPageMeta(
    "Portfolio | Samuel Doghor",
    "Samuel Doghor is a Software Engineer and Piping Designer delivering scalable digital systems and practical engineering solutions.",
    "/",
  );
}

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Header />
        <main className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
          <Hero />
          <SpotifySection />
          <Service />
          <Project />
          <Technologies />
          <Contact />
          <Footer />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Portfolio;
