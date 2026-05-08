import { TechnologiesData, TechnologiesDData } from "./Data";

const Technologies = () => {
  const groupedTechnologies = TechnologiesDData.reduce((acc, item) => {
    if (!acc[item.track]) {
      acc[item.track] = [];
    }
    acc[item.track].push(item);
    return acc;
  }, {});

  return (
    <section className="pt-24" id="stack">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Skills & Tools</p>
      <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">{TechnologiesData[0].heading}</h2>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{TechnologiesData[0].subtitle}</p>

      <div className="mt-10 grid gap-5">
        {Object.entries(groupedTechnologies).map(([track, items]) => (
          <div key={track} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">{track}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
              {items.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/70 px-4 py-2 text-sm text-slate-600 dark:text-slate-200"
                >
                  {item.icon ? <span className="text-cyan-600 dark:text-cyan-300">{item.icon}</span> : null}
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
