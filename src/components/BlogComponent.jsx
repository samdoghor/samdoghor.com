const BlogComponent = () => {
  return (
    <>
      <div
        className="w-full min-h-screen overflow-hidden pt-16 mt-10"
        id="projects"
      >
        <div>
          <p className="text-white font-semibold text-6xl overflow-hidden leading-snug font-novaSquare">
            Blog Post
          </p>
        </div>
        <div className="overflow-hidden drop-shadow-xl pt-4">
          {/* Blog Iteration */}
          <div
            className="w-full grid lg:grid-cols-2 rounded-3xl my-16 p-6 gap-8 bg-primary-pbgcolor"
            data-aos="zoom-out"
          >
            <div>
              <div>
                <p className="text-primary-ylogo text-2xl font-semibold overflow-hidden pb-3 font-novaSquare">
                  Blog Title
                </p>
                <p className="pb-8 text-white text-lg leading-relaxed font-inconsolata font-thin tracking-wide">
                  Blog
                </p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-end items-end">
                {/* <img
                    className="w-[100vw] rounded-[30px] border-t-[25px] border-l-[25px] border-primary-ylogo border-solid z-10"
                    alt="Samuel Doghor"
                    src={project.Image}
                  /> */}
                <div
                  className="w-[100vw] md:w-[60vw] h-[30vh] rounded-[30px] border-t-[20px] border-l-[20px] border-white  border-solid z-10"
                  style={{
                    // backgroundImage: `url(${project.Image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* End of Blog Iteration */}
        </div>
      </div>
    </>
  );
};

export default BlogComponent;
