import { TechnologiesData, TechnologiesDData } from "./Data";

const Technologies = () => {
  const groupedTechnologies = TechnologiesDData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <section className="pt-24" id="stack">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Skills & Tools</p>
      <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">{TechnologiesData[0].heading}</h2>
      <p className="mt-4 text-base text-slate-300">{TechnologiesData[0].subtitle}</p>

      <div className="mt-10 grid gap-5">
        {Object.entries(groupedTechnologies).map(([category, items]) => (
          <div key={category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {items.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200"
                >
                  <span className="text-cyan-300">{item.icon}</span>
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
