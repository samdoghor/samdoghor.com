import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { headerLogoData, headerNavData } from "./Data";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur dark:border-white/10 dark:bg-slate-950/85">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href={headerLogoData[0].link2} className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-300">{headerLogoData[0].logo}</span>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
            {headerLogoData[0].name}
          </span>
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-slate-300 p-2 text-slate-600 transition hover:border-cyan-600 hover:text-cyan-600 dark:border-white/20 dark:text-slate-300 dark:hover:border-cyan-300 dark:hover:text-cyan-300"
          >
            {theme === "dark" ? <FaSun size={14} /> : <FaMoon size={14} />}
          </button>

          <button
            className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold uppercase tracking-widest text-slate-900 dark:border-white/20 dark:text-slate-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            Menu
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            {headerNavData.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="text-xs font-medium uppercase tracking-[0.2em] text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                  target={item.target}
                  rel={item.target === "_blank" ? "noreferrer" : undefined}
                >
                  {item.nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {isOpen ? (
        <ul className="space-y-3 border-t border-slate-200 px-6 py-4 dark:border-white/10 md:hidden">
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
