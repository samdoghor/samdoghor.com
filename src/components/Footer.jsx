import { FooterData } from "./Data";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 py-8">
      <div className="flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          {FooterData[0].copyright} {FooterData[0].year}
        </p>
        <p>Built with React, Vite, and Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
