import MaintenanceMode from "../components/MaintenanceMode";
import { Footer, Header, ScrollToTop } from "../Index";
import { createPageMeta } from "../seo";

// eslint-disable-next-line react-refresh/only-export-components
export function meta() {
  return createPageMeta(
    "Courses | Samuel Doghor",
    "Software engineering courses and learning resources from Samuel Doghor.",
    "/courses",
  );
}

const Courses = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <MaintenanceMode
          pagetitle="Courses Page"
          expectedCompletion="Monday, 3rd March, 2025"
        />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Courses;
