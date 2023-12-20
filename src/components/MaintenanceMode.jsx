import PropTypes from "prop-types";
import { useEffect } from "react";
import { MdMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";

const MaintenanceMode = ({ pagetitle, expectedCompletion }) => {
  useEffect(() => {
    document.title = "Maintenance Mode | Samuel Doghor";
  }, []);
  return (
    <>
      <div className="min-h-[100vh] overflow-hidden">
        <div className="text-white text-center py-24">
          <p className="text-white pt-8 ps-3 lg:ps-10 text-2xl tracking-wide font-bold overflow-hidden">
            {pagetitle}
          </p>
          <p className="text-white font-normal tracking-wider py-10 mx-5 text-2xl lg:ps-10 lg:text-6xl font-bakbakOne overflow-hidden">
            This page is undergoing revamping/construction
          </p>
          <p className="text-white pt-8 mx-5 text-2xl lg:pt-20 lg:ps-10 tracking-wide overflow-hidden text-center">
            <a href="tel:+2348031390921" className="py-1">
              Any question? Reach out to me and I&apos;ll get back to you
              shortly.
              <br /> You can call +2348031390921
            </a>
          </p>
          <div className="text-center flex flex-row place-content-center">
            <span className="text-white pt-8 mx-20 text-lg lg:pt-20 lg:ps-10 tracking-wide overflow-hidden">
              <a
                href="https://wa.me/message/ZU5MOCLXPWDRN1"
                className="flex items-center py-1"
              >
                <MdOutlineWhatsapp className="mr-2" /> +234 (803) 139 0921
              </a>
              <a
                href="mailto:talkto@samdoghor.com"
                className="flex items-center py-1"
              >
                <MdMarkEmailRead className="mr-2" /> talkto@samdoghor.com
              </a>
            </span>
          </div>

          <div className="text-center flex flex-row place-content-center">
            <span className="text-white pt-8 mx-20 text-lg lg:pt-20 lg:ps-10 tracking-wide overflow-hidden">
              <a
                href="https://wa.me/message/ZU5MOCLXPWDRN1"
                className="flex items-center py-1 text-orange-400"
              >
                Expected Completion Date:
              </a>
              <a
                href="mailto:vcare@vivirgros.com"
                className="flex items-center py-1"
              >
                {expectedCompletion}
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

MaintenanceMode.propTypes = {
  pagetitle: PropTypes.string.isRequired,
  expectedCompletion: PropTypes.string.isRequired,
};

export default MaintenanceMode;
