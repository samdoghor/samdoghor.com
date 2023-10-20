// import { useEffect, useState } from "react";
import { ProjectData, ProjectDData } from "./Data";
import { FaGithub, FaLink } from "react-icons/fa";
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
      <div
        className="w-full pt-28 lg:pt-32 min-h-full overflow-hidden mt-28"
        id="projects"
      >
        <div data-aos="flip-down">
          {ProjectData.map((d) => (
            <p
              key={d.id}
              className="text-primary-cylogo font-semibold text-6xl overflow-hidden leading-snug md:leading-normal"
            >
              {d.text}
            </p>
          ))}
        </div>
        <div className="overflow-hidden drop-shadow-xl pt-16">
          {ProjectDData.map((project, index) => (
            <div
              className="w-full grid lg:grid-cols-2 pb-12"
              data-aos="zoom-out"
              key={index}
            >
              <div>
                <div>
                  <p className="text-primary-ylogo text-4xl font-semibold overflow-hidden pb-3 font-hubballi">
                    {project.Title}
                  </p>
                  <p className="flex pb-3 items-center gap-6 text-white text-lg font-nova font-extralight">
                    <a
                      href={project.GitHub}
                      className="flex items-center gap-1"
                    >
                      <FaGithub /> <span> Github </span>
                    </a>
                    <a
                      href={project.Website}
                      className="flex items-center gap-1"
                    >
                      <FaLink /> <span> Website </span>
                    </a>
                  </p>
                  <p className="pb-8 text-white text-xl leading-relaxed font-chakra font-light tracking-wide">
                    {project.Description}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex place-content-center">
                  <img
                    className="flex w-full lg:w-4/6 h-3/6 rounded-[30px] mb-8 place-self-center border-t-d border-l-d border-primary-bblogo border-solid z-10"
                    alt="Samuel Doghor"
                    src={project.Image}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
