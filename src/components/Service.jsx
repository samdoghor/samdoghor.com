import { ServiceData } from "./Data";

const Service = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-full grid lg:grid-cols-3" id="services">
          <div className="col-span-2">
            <div>
              {ServiceData.map((d, index) => (
                <div key={index}>
                  <div className="md:flex items-center">
                    <img
                      className="rounded-full w-36"
                      alt="Samuel Doghor"
                      src="/img/doghs.jpg"
                    />
                    <p className="text-primary-cylogo font-bold overflow-hidden text-4xl md:text-6xl md:ps-4 py-4">
                      {d.service2}
                    </p>
                  </div>
                  <p className="text-primary-ylogo text-6xl md:text-9xl overflow-hidden font-braah tracking-widest pt-4">
                    {d.service3}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <div>
            <div>
              {ServiceData.map((d, index) => (
                <p
                  key={index}
                  className="text-2xl text-white leading-loose overflow-hidden"
                >
                  {d.service}
                </p>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Service;
