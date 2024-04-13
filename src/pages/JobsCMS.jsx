import { Helmet } from "react-helmet";
import PortfolioComponent from "../components/PortfolioComponent";
import { projectCMS } from "../constants";

const JobsCMS = () => {
  return (
    <>
      <div>
        <Helmet>
          <title> CMS Jobs | Samuel, Doghor </title>

          <meta property="title" content="CMS Jobs | Samuel, Doghor" />
          <meta property="og:title" content="CMS Jobs | Samuel, Doghor" />
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
                    Selected CMS works
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
                {projectCMS.map((projectCMS) => (
                  <>
                    <PortfolioComponent
                      id={projectCMS.id}
                      imageUrl={projectCMS.imageUrl}
                      company={projectCMS.company}
                      type={projectCMS.type}
                      link={projectCMS.link}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCMS;
