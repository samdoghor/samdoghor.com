import Helmet from "react-helmet";
import { Contact, Footer, Header, Hero, Project, ScrollToTop, Service, Technologies } from "../Index";

const Portfolio = () => {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
        <Header />
        <Helmet>
          <title>Portfolio | Samuel Doghor</title>
          <meta property="title" content="Portfolio | Samuel Doghor" />
          <meta property="og:title" content="Portfolio | Samuel Doghor" />
          <meta
            property="description"
            content="Samuel Doghor is a Software Engineer and Piping Engineer delivering scalable digital systems and practical engineering solutions."
          />
          <meta
            property="og:description"
            content="Software Engineering and Piping Engineering portfolio of Samuel Doghor, focused on quality delivery across both domains."
          />
          <meta property="image" content="/img/doghs.jpg" />
          <meta property="og:image" content="/img/doghs.jpg" />
        </Helmet>

        <main className="mx-auto w-full max-w-6xl px-6 pb-10 md:px-8">
          <Hero />
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
