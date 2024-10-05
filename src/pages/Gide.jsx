import { Helmet } from "react-helmet";
import { ScrollToTop } from "../Index";
import { FaCalendarCheck, FaClock } from "react-icons/fa";

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

      <div className="bg-neutral-300 flex justify-center items-center p-12">
        <div className="bg-neutral-100 border-4 border-t-amber-600 border-b-green-800 border-r-amber-600 border-l-green-800 w-2/4 rounded-2xl">
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

            <div className="pb-6">
              <p className="text-green-800 text-center text-4xl font-bold py-1">
                You are invited
              </p>
              <p className="text-black text-center text-xl font-bold py-1 font-caveat">
                to the
              </p>
              <p className="text-green-700 text-center text-5xl font-bold pt-1 font-anton tracking-widest leading-tight h-40">
                Solemnization of <br /> Holy Matrimony
              </p>
              <p className="text-black text-center text-xl font-bold font-caveat">
                of
              </p>
            </div>

            <div className="flex flex-row gap-20 justify-center h-full">
              <div className="flex flex-col h-full justify-center items-center gap-5">
                <img
                  src="/img/godsgift.jpg"
                  alt="God's Gift"
                  className="rounded-full w-40 h-40"
                />
                <p className="h-10 text-green-800 font-bold">
                  God&apos;sgift Ikio, Ogodo
                </p>
              </div>
              <div className="flex flex-col h-full justify-center items-center gap-5">
                <img
                  src="/img/doghor.jpg"
                  alt="Doghor"
                  className="rounded-full w-40 h-40"
                />
                <p className="h-10 text-green-800 font-bold">
                  Doghor Destiny, Samuel
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-12 pt-10">
              <p className="text-green-800 text-center text-xl font-bold flex flex-row gap-2 justify-center items-center">
                <span>
                  <FaCalendarCheck />
                </span>
                <span>9th November, 2024</span>
              </p>
              <p className="text-green-800 text-center text-xl font-bold flex flex-row gap-2 justify-center items-center">
                <span>
                  <FaClock />
                </span>
                <span>10am</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gide;
