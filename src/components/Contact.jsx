import { ContactData, contactSocialData } from "./Data";

const Contact = () => {
  return (
    <>
      <div
        className="w-full pt-28 lg:pt-32 min-h-full overflow-hidden mt-28"
        id="contact"
      >
        <div>
          <div data-aos="flip-down">
            {ContactData.map((d) => (
              <div key={d.id}>
                <p className="text-primary-cylogo font-semibold text-5xl md:text-6xl overflow-hidden leading-snug md:leading-normal">
                  {d.heading}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="w-full grid lg:grid-cols-2">
              <div>
                <div>
                  {ContactData.map((d) => (
                    <div key={d.id}>
                      <p className="flex  text-primary-ylogo text-2xl align-middle gap-4">
                        {d.ticon} {d.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 mt-6">
                  {contactSocialData.map((d) => (
                    <div key={d.id}>
                      <a
                        className="flex text-lg text-white items-center gap-2 mt-6"
                        href={d.link}
                        key={d.id}
                        target="_blank"
                        rel="noreferrer"
                        data-aos="zoom-in"
                      >
                        {d.icon}
                        {d.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div>
                  {ContactData.map((d) => (
                    <div
                      key={d.id}
                      className="flex justify-center items-center gap-10 h-fit overflow-hidden pt-10 text-center"
                    >
                      <a
                        className="self-center  text-white font-semibold text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                      >
                        <img
                          className="w-32 mb-8 rounded-full"
                          alt="Nigeria Flag"
                          src={d.country}
                        />
                        Nigeria
                      </a>
                      <a
                        className="self-center  text-white font-semibold text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                      >
                        <img
                          className="w-32 mb-8 rounded-full"
                          alt="Manchester United Logo"
                          src={d.logo}
                        />
                        Manchester United
                      </a>
                      <a
                        className="self-center text-white font-semibold text-lg"
                        data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom"
                      >
                        <img
                          className="w-32 mb-8 self-center rounded-full"
                          alt="Marcus Rashford"
                          src={d.image}
                        />
                        Marcus Rashford
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
