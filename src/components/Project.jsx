// import { useEffect, useState } from "react";
import { ProjectData, ProjectDData } from "./Data";
import { FaGithub, FaLink, FaSplotch } from "react-icons/fa";
// import axios from "axios";

const Project = () => {
  // const [projects, setProjects] = useState([]);
  // const [isLoading, setIsLoading] = useState(true); // Add loading state

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       // .get("https://samdoghor-portfolio-backend.vercel.app/projects")
  //       .get("https://samdoghor-portfolio-backend.onrender.com/projects")
  //       // .get("http://127.0.0.1:5000/projects")
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setProjects(response.data.Projects);
  //         } else {
  //           console.error("Error fetching projects:", response.status);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching projects:", error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   };

  //   fetchData(); // Initial fetch

  //   const interval = setInterval(fetchData, 10 * 60 * 1000); // Fetch every 10 minutes

  //   return () => {
  //     clearInterval(interval); // Clean up interval on component unmount
  //   };
  // }, []);

  // if (isLoading) {
  //   // Render loading indicator or placeholder content while loading
  //   return (
  //     <div>
  //       {ProjectData.map((d) => (
  //         <p
  //           key={d.id}
  //           className="text-white text-center text-xl pt-28 lg:pt-44"
  //         >
  //           {d.code1}
  //         </p>
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden" id="projects">
        <div>
          {ProjectData.map((d, index) => (
            <p
              key={index}
              className="text-white font-semibold text-6xl overflow-hidden leading-snug font-novaSquare"
            >
              {d.text}
            </p>
          ))}
        </div>
        <div className="overflow-hidden drop-shadow-xl pt-4">
          {ProjectDData.map((project, index) => (
            <div
              className="w-full grid lg:grid-cols-2 rounded-3xl my-16 p-6 gap-8 bg-primary-pbgcolor border-white border-2"
              data-aos="zoom-out"
              key={index}
            >
              <div>
                <div>
                  <p className="text-primary-ylogo text-2xl font-semibold overflow-hidden pb-3 font-novaSquare">
                    {project.Title}
                  </p>
                  <p className="flex pb-3 items-center gap-6 text-white text-base font-nova font-extralight">
                    <a
                      href={project.GitHub}
                      className="flex items-center gap-1"
                    >
                      <FaGithub />
                      <span className="text-slate-400 "> Github </span>
                    </a>
                    <a
                      href={project.Website}
                      className="flex items-center gap-1"
                    >
                      <FaLink />
                      <span className="text-slate-400 "> Website </span>
                    </a>
                    <span
                      href={project.Website}
                      className="flex items-center gap-1"
                    >
                      <FaSplotch />
                      <p className="text-slate-400 ">
                        Status:
                        <span className="text-white"> {project.Status} </span>
                      </p>
                    </span>
                  </p>
                  <p className="pb-8 text-white text-lg leading-relaxed font-inconsolata font-thin tracking-wide">
                    {project.Description}
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
                    className="w-[100vw] md:w-[60vw] h-[40vh] rounded-[30px] border-t-[10px] border-l-[10px] border-white  border-solid z-10"
                    style={{
                      backgroundImage: `url(${project.Image})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden">
          <p className="">
            <ul className="flex font-novaSquare">
              <li className="px-2">
                <a
                  href="/jobs"
                  className="overflow-hidden text-white text-xl font-bold hover:underline"
                  target="_blank"
                >
                  More Projects (Coding) ⚡
                </a>
              </li>
              <li className="px-2">
                <a
                  href="/jobs-cms"
                  className="overflow-hidden text-white text-xl font-bold hover:underline"
                  target="_blank"
                >
                  More Projects (Wordpress) ⚡
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;
