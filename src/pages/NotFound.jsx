import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "Not Found | Samuel Doghor";
  }, []);
  return (
    <>
      <div className="grid h-[100vh] place-items-center px-6 py-10 lg:px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-white overflow-hidden font-alfaSlabOne tracking-widest">
            404
          </p>
          <h1 className="py-4 text-3xl font-bold tracking-tight text-white sm:text-5xl overflow-hidden">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-white overflow-hidden">
            Sorry, we couldn’t find the page you’re looking for.
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
    </>
  );
};

export default NotFound;
