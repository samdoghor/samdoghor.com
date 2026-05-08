const BlogComponent = () => {
  return (
    <>
      <div
        className="w-full min-h-screen overflow-hidden pt-16 mt-10"
        id="projects"
      >
        <div>
          <p className="text-slate-900 dark:text-white font-semibold text-6xl overflow-hidden leading-snug font-novaSquare">
            Blog Post
          </p>
        </div>
        <div className="overflow-hidden drop-shadow-xl pt-4">
          {/* Blog Iteration */}
          <div
            className="w-full grid lg:grid-cols-2 rounded-3xl my-16 p-6 gap-8 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10"
            data-aos="zoom-out"
          >
            <div>
              <div>
                <p className="text-cyan-600 dark:text-cyan-400 text-2xl font-semibold overflow-hidden pb-3 font-novaSquare">
                  Blog Title
                </p>
                <p className="pb-8 text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-inconsolata font-thin tracking-wide">
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
                  className="w-[100vw] md:w-[60vw] h-[30vh] rounded-[30px] border-t-[20px] border-l-[20px] border-slate-200 dark:border-slate-800 border-solid z-10"
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
