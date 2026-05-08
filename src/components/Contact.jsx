import { ContactData, contactSocialData } from "./Data";

const Contact = () => {
  const profile = ContactData[0];

  return (
    <section className="pt-24" id="contact">
      <div className="grid gap-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 p-8 md:grid-cols-[1.1fr,1fr] md:p-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">Contact</p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 dark:text-white md:text-5xl">{profile.heading}</h2>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{profile.title}</p>
          <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">{profile.availability}</p>

          <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-200">
            <a href={`mailto:${profile.email}`} className="rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3 transition hover:border-cyan-500 dark:hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-300">
              {profile.email}
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3 transition hover:border-cyan-500 dark:hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-300">
              WhatsApp Chat
            </a>
            <p className="rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3">Location: {profile.location}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/80 p-4">
            <img className="h-20 w-20 rounded-xl object-cover" alt="Samuel Doghor" src={profile.image} />
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-300">Samuel Doghor</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Software Engineer & Piping Engineer</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {contactSocialData.map((item) => (
              <a
                key={item.id}
                className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/70 px-4 py-3 text-sm text-slate-600 dark:text-slate-200 transition hover:border-cyan-500 dark:hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-300"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
