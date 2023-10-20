import { HeroData } from "./Data";

const Hero = () => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-3 pt-12 min-h-full">
        <div className="w-full lg:order-2 place-self-center" data-aos="flip-up">
          <img
            className="rounded-full"
            alt="Samuel Doghor"
            src="/img/doghs.jpg"
          />
        </div>
        <div
          className="w-full md:col-span-2 pt-8 md:pt-0"
          data-aos="fade-right"
        >
          {HeroData.map((d) => (
            <span key={d.id}>
              <p className="text-primary-ylogo font-black text-7xl md:overflow-hidden pb-10 pt-8 md:pt-16 overflow-hidden">
                {d.name}
              </p>
              <p className="text-white font-black text-6xl md:overflow-hidden pb-8 tracking-widest font-ubuntu">
                {d.stack}
              </p>
              <p className="text-primary-ylogo text-4xl md:overflow-hidden pb-2 md:pb-8 font-genos font-semibold">
                {d.text}
              </p>
              <p className="hidden lg:block text-slate-400 font-normal text-2xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                {d.code1}
              </p>
              <p className="lg:hidden text-slate-400 font-normal text-2xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                {d.code2}
              </p>
              <p className="lg:hidden text-slate-400 font-normal text-2xl md:overflow-hidden pb-4 md:pb-6 leading-relaxed font-caveat">
                {d.code3}
              </p>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
