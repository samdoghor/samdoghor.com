const Service = () => {
  return (
    <>
      <div className="pb-20">
        <div>
          <div className="w-full grid lg:grid-cols-3 text-center">
            <div className="w-full">
              <p className="overflow-hidden text-3xl font-extrabold text-gray-400">
                05+ Years
              </p>
              <p className="overflow-hidden text-white">of Experience </p>
            </div>
            <div className="w-full">
              <p className="overflow-hidden text-3xl font-extrabold text-gray-400">
                18+
              </p>
              <p className="overflow-hidden text-white"> Projects Completed </p>
            </div>
            <div className="w-full">
              <p className="overflow-hidden text-3xl font-extrabold text-gray-400">
                04+
              </p>
              <p className="overflow-hidden text-white"> Companies Worked </p>
            </div>
          </div>
          <div className="text-center overflow-hidden my-10">
            <a
              href="src/assets/Samuel Doghor - Software Engineer_s.pdf"
              className="overflow-hidden text-white text-xl font-bold hover:underline"
              download
            >
              Get my latest Resume ⚡
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
