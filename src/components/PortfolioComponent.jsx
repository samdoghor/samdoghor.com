import PropTypes from "prop-types";

const PortfolioComponent = ({ id, imageUrl, company, type, link }) => {
  return (
    <>
      <a className="overflow-hidden" href={link}>
        <div
          key={id}
          className="min-h-[60vh] lg:min-h-[95vh] box-border border-slate-200 dark:border-white/10 border-2 lg:mx-6 flex flex-col justify-end my-10 rounded-3xl shadow-xl transition-all hover:scale-[1.01]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="relative p-6 text-white bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl">
            <p className="overflow-hidden text-right font-bold text-2xl pb-2">
              {company}
            </p>
            <p className="overflow-hidden text-right font-sansita text-slate-200">{type}</p>
          </div>
        </div>
      </a>
    </>
  );
};

PortfolioComponent.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default PortfolioComponent;
