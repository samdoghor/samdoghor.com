import PropTypes from "prop-types";

const PortfolioComponent = ({ id, imageUrl, company, type, link }) => {
  return (
    <>
      <a className="overflow-hidden" href={link}>
        <div
          key={id}
          className="min-h-[60vh] lg:min-h-[95vh] box-border border-gray-100 border-2 lg:mx-6 flex flex-col justify-end my-10 rounded-3xl shadow-lg shadow-black"
          style={{
            backgroundImage: `linear-gradient(rgba(17, 19, 25, .8), rgba(17, 19, 25, 1)), url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="relative p-4 text-white">
            <p className="overflow-hidden text-right font-bold text-lg pb-2">
              {company}
            </p>
            <p className="overflow-hidden text-right font-sansita">{type}</p>
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
