import { useState } from "react";
import { headerLogoData, headerNavData } from "./Data";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/85 dark:bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href={headerLogoData[0].link2} className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-300">
            {headerLogoData[0].logo}
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
            {headerLogoData[0].name}
          </span>
        </a>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-md border border-slate-200 dark:border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-900 dark:text-slate-100"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        <ul className="hidden items-center gap-6 md:flex">
          {headerNavData.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300 transition hover:text-cyan-600 dark:hover:text-cyan-300"
                target={item.target}
                rel={item.target === "_blank" ? "noreferrer" : undefined}
              >
                {item.nav}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      {isOpen ? (
        <ul className="space-y-3 border-t border-slate-200 dark:border-white/10 px-6 py-4 md:hidden">
          {headerNavData.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block text-xs font-medium uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300"
                onClick={() => setIsOpen(false)}
                target={item.target}
                rel={item.target === "_blank" ? "noreferrer" : undefined}
              >
                {item.nav}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
};

export default Header;
