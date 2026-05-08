import { FaGithub, FaLink } from "react-icons/fa";
import { PipingProjectsData, ProjectData, ProjectDData } from "./Data";

const Project = () => {
  return (
    <section className="pt-24" id="projects">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Portfolio Highlights</p>
        <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">{ProjectData[0].text}</h2>
        <p className="mt-4 text-base text-slate-300">{ProjectData[0].subtitle}</p>
      </div>

      <div className="mt-10 grid gap-8">
        {ProjectDData.map((project) => (
          <article
            className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 lg:grid-cols-[1.2fr,1fr]"
            key={project.id}
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{project.Domain}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.Title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.Description}</p>
              <p className="mt-4 text-sm text-slate-400">
                Status: <span className="font-semibold text-slate-100">{project.Status}</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-300">
                {project.GitHub !== "#" ? (
                  <a href={project.GitHub} className="inline-flex items-center gap-2 hover:text-cyan-300" target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                ) : null}
                {project.Website !== "#" ? (
                  <a href={project.Website} className="inline-flex items-center gap-2 hover:text-cyan-300" target="_blank" rel="noreferrer">
                    <FaLink /> Website
                  </a>
                ) : null}
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src={project.Image} alt={project.Title} className="h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PipingProjectsData.map((item) => (
          <article key={item.id} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Piping Engineering</p>
            <h4 className="mt-3 text-lg font-bold text-white">{item.title}</h4>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold uppercase tracking-widest">
        <a href="/jobs" className="rounded-full border border-white/20 px-5 py-3 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300" target="_blank" rel="noreferrer">
          More
        </a>
      </div>
    </section>
  );
};

export default Project;
