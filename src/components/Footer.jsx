import { FooterData } from "./Data";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-28 mb-5 min-h-full overflow-hidden border-primary-cylogo py-4">
        <div className="pt-2">
          {FooterData.map((d, index) => (
            <div key={index}>
              <div className="text-white text-lg text-center md:text-left font-novaSquare">
                {d.copyright} {d.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
