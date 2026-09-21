import { ProjectData } from "./Data";
import WordPressProjects from "./WordPressProjects";

const Project = () => {
  return (
    <section className="pt-24" id="projects">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Portfolio Highlights</p>
        <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">{ProjectData[0].text}</h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{ProjectData[0].subtitle}</p>
      </div>

      <WordPressProjects />

      <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-widest">
        <a href="/jobs" className="rounded-full border border-slate-200 dark:border-white/20 px-5 py-3 text-slate-600 dark:text-slate-200 transition hover:border-cyan-500 dark:hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-300" target="_blank" rel="noreferrer">
          More
        </a>
      </div>
    </section>
  );
};

export default Project;
