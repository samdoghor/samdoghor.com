import { HeroData, ServiceData } from "./Data";

const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen pb-10">
        <div>
          <div className="w-full grid lg:grid-cols-4">
            <div className="w-full md:col-span-3  flex items-center">
              {HeroData.map((d, index) => (
                <span key={index}>
                  <p className="text-white font-black text-7xl md:text-8xl md:overflow-hidden pb-10 pt-8 md:pt-16 overflow-hidden">
                    {d.name}
                  </p>
                  <p className="text-primary-ylogo font-black text-6xl md:overflow-hidden pb-8 tracking-widest font-ubuntu">
                    {d.stack}
                  </p>
                  <p className="hidden lg:block text-slate-400 font-normal text-xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                    {d.code1}
                  </p>
                  <p className="lg:hidden text-slate-400 font-normal text-xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                    {d.code2}
                  </p>
                  <p className="lg:hidden text-slate-400 font-normal text-xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                    {d.code3}
                  </p>
                </span>
              ))}
            </div>
          </div>
          <div className="block md:w-3/5">
            <div>
              {ServiceData.map((d, index) => (
                <p
                  key={index}
                  className="text-xl text-white leading-loose overflow-hidden font-inconsolata"
                >
                  {d.service}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
