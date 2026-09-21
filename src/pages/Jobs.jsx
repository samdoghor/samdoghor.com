import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop, WordPressProjects } from "../Index";

const Jobs = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <div>
          <Helmet>
            <title> Jobs | Samuel, Doghor </title>

            <meta property="title" content="Jobs | Samuel, Doghor" />
            <meta property="og:title" content="Jobs | Samuel, Doghor" />
            <meta
              property="description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
            />
            <meta
              property="og:description"
              content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
            />
            <meta property="image" content="/img/doghs.jpg" />
            <meta property="og:image" content="/img/doghs.jpg" />
          </Helmet>
        </div>
        <div>
          <div className="min-h-fit py-28">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
              <div className="min-h-fit">
                <div className="">
                  <div className="pt-14 md:pt-0">
                    <p className="overflow-hidden font-genos text-6xl font-black tracking-wider text-slate-900 dark:text-white">
                      Selected Projects
                    </p>
                    <p className="overflow-hidden text-xl py-2 leading-10 text-slate-600 dark:text-slate-300">
                      Some of my accomplishments.
                    </p>
                  </div>
                </div>
                <hr className="border-2 border-slate-200 dark:border-white" />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
            <WordPressProjects />
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Jobs;
