import { ServiceData, ServiceStatsData } from "./Data";
import resumePdf from "../assets/Samuel Doghor - Software Engineer_s.pdf";

const Service = () => {
  return (
    <section className="pt-24">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-white/10 dark:bg-slate-900/60 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Professional Value</p>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">{ServiceData[0].service}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ServiceStatsData.map((stat) => (
            <div key={stat.id} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950/80">
              <p className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={resumePdf}
            className="inline-flex rounded-full border border-cyan-600/40 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-600 transition hover:border-cyan-700 hover:text-cyan-700 dark:border-cyan-300/40 dark:text-cyan-300 dark:hover:border-cyan-200 dark:hover:text-cyan-200"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Service;
