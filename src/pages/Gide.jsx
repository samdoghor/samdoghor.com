import { Helmet } from "react-helmet";
import { ScrollToTop } from "../Index";

const Gide = () => {
  return (
    <>
      <ScrollToTop />
      <div>
        <Helmet>
          <title> Gide 2024 | God&apos;sgift & Doghor </title>

          <meta property="title" content="Gide 2024 | God'sgift & Doghor" />
          <meta property="og:title" content="Gide 2024 | God'sgift & Doghor" />
          <meta
            property="description"
            content="God'sgift Ogodo and I, Doghor Samuel, share a deep bond built on love, friendship, and faith. This page is a reflection of our journey together as we continue to grow and create a life filled with joy and purpose."
          />
          <meta
            property="og:description"
            content="God'sgift Ogodo and I, Doghor Samuel, share a deep bond built on love, friendship, and faith. This page is a reflection of our journey together as we continue to grow and create a life filled with joy and purpose."
          />
          <meta property="image" content="/img/doghs.jpg" />
          <meta property="og:image" content="/img/doghs.jpg" />
        </Helmet>
      </div>

      <div className="bg-neutral-200">
        <div className="min-h-screen my-4">
          <div className="flex flex-row gap-4 justify-center h-full">
            <div className="flex flex-col h-full justify-center items-center gap-5">
              <img
                src="/img/gide-logo.png"
                alt="God's Gift"
                className="rounded-full w-20 h-w-20"
              />
            </div>
          </div>

          <div className="pb-12">
            <p className="text-green-800 text-center text-4xl font-bold py-1">
              You are invited
            </p>
            <p className="text-black text-center text-xl font-bold py-1 font-caveat">
              to the
            </p>
            <p className="text-black text-center text-5xl font-bold py-1 font-anton -tracking-normal leading-tight h-40">
              Solemnization of <br /> Holy Matrimony
            </p>
            <p className="text-black text-center text-xl font-bold py-1 font-caveat">
              of
            </p>
          </div>

          <div className="flex flex-row gap-4 justify-center h-full">
            <div className="flex flex-col h-full justify-center items-center gap-5">
              <img
                src="/img/godsgift.jpg"
                alt="God's Gift"
                className="rounded-full w-40 h-w-40"
              />
              <p className="h-40">God&apos;sgift Ogodo</p>
            </div>
            <div className="flex flex-col h-full justify-center items-center gap-5">
              <img
                src="/img/doghor.jpg"
                alt="Doghor"
                className="rounded-full w-40 h-w-40"
              />
              <p className="h-40">Doghor Samuel</p>
            </div>
          </div>

          <div>
            <p className="text-black text-center text-4xl font-bold py-1">
              9th November, 2024
            </p>
            <p className="text-black text-center text-xl font-bold py-1">
              10am
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gide;
