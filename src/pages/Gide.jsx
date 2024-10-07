import { Helmet } from "react-helmet";
import { ScrollToTop } from "../Index";
import { FaCalendarCheck, FaClock } from "react-icons/fa";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

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

      <div className="bg-neutral-300 min-h-screen">
        <div className="bg-[url('/img/wedding-bg.png')] w-full flex justify-center items-center p-4 md:p-12 bg-cover md:bg-contain bg-center bg-no-repeat min-h-screen">
          <div className="bg-neutral-100 border-4 border-t-amber-600 border-b-green-800 border-r-amber-600 border-l-green-800 w-full md:w-2/5 rounded-2xl">
            <div className="m-2 md:m-8">
              <div className="flex flex-row gap-4 justify-center h-full">
                <div className="flex flex-col h-full justify-center items-center gap-5">
                  <img
                    src="/img/gide-logo.png"
                    alt="God's Gift"
                    className="rounded-full w-20 h-20"
                  />
                </div>
              </div>

              <div className="pb-2">
                <p className="text-green-800 text-center text-2xl md:text-4xl font-bold py-1">
                  You are invited
                </p>
                <p className="text-black text-center text-xl font-bold py-1 font-caveat">
                  to the
                </p>
                <p className="text-green-700 text-center text-4xl md:text-5xl font-bold md:pt-1 font-protestStrike tracking-wide leading-tight md:h-40">
                  Solemnization of <br /> Holy Matrimony
                </p>
                <p className="text-black text-center text-xl font-bold font-caveat">
                  of
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:gap-20 justify-center h-full">
                <div className="flex flex-col h-full justify-center items-center gap-5">
                  <img
                    src="/img/godsgift.jpg"
                    alt="God's Gift"
                    className="rounded-full w-36 md:w-40 h-w-36 md:h-40"
                  />
                  <p className="h-16 text-center text-green-800 font-bold">
                    God&apos;sgift Ikio,
                    <span className="ps-2 font-novaSquare font-semibold text-xl">
                      Ogodo
                    </span>
                  </p>
                </div>
                <div className="flex flex-col h-full justify-center items-center gap-5">
                  <img
                    src="/img/doghor.jpg"
                    alt="Doghor"
                    className="rounded-full w-36 md:w-40 h-w-36 md:h-40"
                  />
                  <p className="h-16 text-center text-green-800 font-bold">
                    Doghor Destiny,
                    <span className="ps-2 font-novaSquare font-semibold text-xl">
                      Samuel
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-2 pt-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-12">
                  <p className="text-green-800 text-center textlg font-normal flex flex-row gap-2 justify-center items-center">
                    <span>
                      <FaCalendarCheck />
                    </span>
                    <span className="overflow-hidden">9th November, 2024</span>
                  </p>
                  <p className="text-green-800 text-center textlg font-normal flex flex-row gap-2 justify-center items-center">
                    <span>
                      <FaClock />
                    </span>
                    <span className="overflow-hidden">10am</span>
                  </p>
                </div>
                <div className="h-10 pt-4">
                  <a
                    className="h-10 text-green-800 text-center text-normal font-normal underline"
                    href="https://calendar.app.google/oorFKX8h8Vt871N69"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Set Reminder
                  </a>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 pt-10">
                <a
                  href="https://maps.app.goo.gl/NQZ91XJTNZiYbh5C9"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button outline gradientDuoTone="pinkToOrange">
                    Directions to Church
                  </Button>
                </a>
                <Link to="/gide/gallery" target="_blank">
                  <Button outline gradientDuoTone="greenToBlue">
                    See our Gallery
                  </Button>
                </Link>
                <a
                  href="https://maps.app.goo.gl/7G3ykzLsXcSaaTzM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button outline gradientDuoTone="pinkToOrange">
                    Directions to Reception
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gide;
