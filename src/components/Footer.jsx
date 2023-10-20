import { FooterData } from "./Data";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-28 mb-5 min-h-full overflow-hidden border-t-2 border-primary-cylogo py-4">
        <div className="pt-2">
          {FooterData.map((d) => (
            <div key={d.id}>
              <div className="text-white text-center text-lg">
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
