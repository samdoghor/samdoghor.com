import PortfolioComponent from "../components/PortfolioComponent";
import { projectMain } from "../constants";
import { Helmet } from "react-helmet";
import { Footer, Header, ScrollToTop } from "../Index";

const Jobs = () => {
  return (
    <>
      <div
        className="container mx-auto px-4 md:px-32 bg-primary-bgcolor min-h-screen max-w-full"
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
            <div className="container mx-auto px-8 md:px-10">
              <div className="min-h-fit">
                <div className="">
                  <div className="pt-14 md:pt-0">
                    <p className="overflow-hidden font-genos text-6xl font-black tracking-wider text-white">
                      Selected Coding works
                    </p>
                    <p className="overflow-hidden text-xl py-2 leading-10 text-white">
                      Some of my accomplishments.
                    </p>
                  </div>
                </div>
                <hr className="border-2 border-white" />
              </div>
            </div>
          </div>

          <div>
            <div className="container mx-auto">
              <div>
                <div className="grid lg:grid-cols-2 md:px-10 mx-auto overflow-hidden">
                  {projectMain.map((projectMain) => (
                    <>
                      <PortfolioComponent
                        id={projectMain.id}
                        imageUrl={projectMain.imageUrl}
                        company={projectMain.company}
                        type={projectMain.type}
                        link={projectMain.link}
                      />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Jobs;
