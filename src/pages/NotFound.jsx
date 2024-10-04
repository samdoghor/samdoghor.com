import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";

const NotFound = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-primary-bgcolor min-h-screen max-w-full"
        style={{ zIndex: 2 }} // Set z-index to 1 for the main container
      >
        <Header />
        <div>
          <Helmet>
            <title> Not Found | Samuel Doghor </title>

            <meta property="title" content="Not Found | Samuel Doghor" />
            <meta property="og:title" content="Not Found | Samuel Doghor" />
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
        <div className="grid h-[100vh] place-items-center px-6 py-10 lg:px-8">
          <div className="text-center">
            <p className="text-9xl font-semibold text-white overflow-hidden font-alfaSlabOne tracking-widest">
              404
            </p>
            <h1 className="py-4 text-3xl font-bold tracking-tight text-white sm:text-5xl overflow-hidden">
              Page not found
            </h1>
            <p className="mt-6 text-base leading-7 text-white overflow-hidden">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 overflow-hidden">
              <a
                href="/"
                className="rounded-md bg-vivirgrosTwo px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-vivirgrosOne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vivirgrosTwo-600 tracking-widest"
              >
                Go back home
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white overflow-hidden"
              >
                <button className="text-base font-bold tracking-wide hover:text-slate-600 overflow-hidden">
                  <a href="/contact">Contact Support</a>
                </button>
              </a>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default NotFound;
