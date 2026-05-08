import { CareerTracksData, HeroData } from "./Data";

const Hero = () => {
  const hero = HeroData[0];

  return (
    <section className="pt-28 md:pt-36" id="home">
      <div className="grid gap-10 md:grid-cols-[1.3fr,1fr] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Portfolio 2026
          </span>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">{hero.name}</h1>
          <p className="text-lg font-semibold text-cyan-300 md:text-2xl">{hero.stack}</p>
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{hero.summary}</p>
          <p className="font-mono text-sm text-slate-400">{hero.code1}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-cyan-300"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
            >
              View Work
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-3 shadow-2xl shadow-cyan-900/30">
            <img src={hero.profileImage} alt={hero.name} className="h-80 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </div>

      <div id="careers" className="mt-8 grid gap-4 md:grid-cols-2">
        {CareerTracksData.map((track) => (
          <article key={track.id} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-white">{track.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{track.blurb}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {track.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hero;
