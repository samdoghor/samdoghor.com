import { ServiceData, headerSocialData } from "./Data";

const Service = () => {
  return (
    <>
      <div
        className="w-full grid lg:grid-cols-3 pt-16 lg:pt-32 mt-10 min-h-full"
        id="services"
      >
        <div className="col-span-2">
          <div>
            {ServiceData.map((d, index) => (
              <div key={index}>
                <p className="flex pb-4 items-center">
                  <img
                    className="rounded-full w-28 block"
                    alt="Samuel Doghor"
                    src="/img/doghs.jpg"
                  />
                  <span className="text-primary-cylogo items-center text-5xl md:text-7xl font-bold overflow-hidden lg:ps-4 leading-snug md:leading-relaxed tracking-widest font-hubballi">
                    {d.service2}
                  </span>
                </p>
                <p className="text-primary-ylogo items-center text-6xl md:text-8xl overflow-hidden tracking-widest font-braah">
                  {d.service3}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mt-8">
          <div>
            <div>
              {ServiceData.map((d, index) => (
                <p
                  key={index}
                  className="text-xl md:text-2xl text-white leading-loose"
                >
                  {d.service}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-2 grid-rows-2 mt-6">
              {headerSocialData.map((d, index) => (
                <div key={index}>
                  <a
                    className="flex text-lg text-primary-logo items-center gap-2 mt-6"
                    href={d.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {d.icon}
                    {d.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
