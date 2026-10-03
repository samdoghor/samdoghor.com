import { Footer, Header, ScrollToTop, WordPressProjects } from "../Index";
import { createPageMeta } from "../seo";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return createPageMeta(
    "Projects | Samuel Doghor",
    "Selected software and engineering projects by Samuel Doghor.",
    "/projects",
  );
}

const Jobs = () => {
  return (
    <>
      <div
        className="min-h-screen max-w-full bg-white text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
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
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Jobs;
