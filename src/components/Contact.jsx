import { ContactData, contactSocialData } from "./Data";

const Contact = () => {
  return (
    <>
      <div
        className="w-full pt-16 min-h-full overflow-hidden mt-10"
        id="contact"
      >
        <div>
          <div>
            {ContactData.map((d, index) => (
              <div key={index}>
                <p className="text-white text-6xl font-semibold overflow-hidden leading-snug md:leading-normal font-novaSquare">
                  {d.heading}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-10">
            <div className="w-full grid lg:grid-cols-2">
              <div>
                <div>
                  {ContactData.map((d, index) => (
                    <div key={index}>
                      <p className="flex  text-primary-ylogo text-2xl align-middle gap-4 font-novaSquare">
                        {d.ticon} {d.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 grid-rows-2 mt-6">
                  {contactSocialData.map((d, index) => (
                    <div key={index}>
                      <a
                        className="flex text-lg text-white items-center gap-2 mt-6 font-inconsolata"
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
                  {ContactData.map((d, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center gap-10 h-fit overflow-hidden pt-10 text-center font-novaSquare"
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
                          alt="Samuel, Doghor "
                          src={d.image}
                        />
                        Samuel, Doghor
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
