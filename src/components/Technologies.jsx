import { TechnologiesData, TechnologiesDData } from "./Data";

const Technologies = () => {
  return (
    <>
      <div className="w-full pt-10 min-h-full overflow-hidden mt-10" id="stack">
        <div>
          {TechnologiesData.map((d, index) => (
            <div key={index}>
              <p className="text-white text-6xl font-semibold overflow-hidden leading-snug md:leading-normal">
                {d.heading}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full mt-10">
          <div
            data-aos="fade-right"
            className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3"
          >
            {TechnologiesDData.map((d, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl drop-shadow-md hover:animate-pulse hover:cursor-pointer"
              >
                <div>
                  <div className="grid text-4xl text-white font-nova tracking-wider overflow-hidden font-bold p-1 justify-items-center">
                    <span className="text-center"> {d.icon} </span>
                  </div>
                  <div className="p-1 rounded-full text-primary-ylogo font-ubuntu font-bold tracking-wide text-center">
                    {d.category}
                  </div>
                  <div className="pb-8 rounded-full text-white font-ubuntu font-normal tracking-wide text-center text-xs">
                    {d.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
