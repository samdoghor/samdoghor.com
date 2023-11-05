import { useEffect } from "react";
import PortfolioComponent from "../components/PortfolioComponent";
import { projectMain } from "../constants";

const Jobs = () => {
  useEffect(() => {
    document.title = "Jobs | ...Samuel, Doghor";
  }, []);
  return (
    <>
      <div>
        <div className="min-h-fit py-28">
          <div className="container mx-auto px-8 md:px-10">
            <div className="min-h-fit">
              <div className="">
                <div className="pt-14 md:pt-0">
                  <p className="overflow-hidden font-genos text-6xl font-black tracking-wider text-white">
                    Selected works
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
          <div className="container mx-auto px-8 md:px-10 py-14">
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
    </>
  );
};

export default Jobs;
