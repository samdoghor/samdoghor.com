import { Hero, Project, Technologies, Contact } from "../Index";
import { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Samuel Doghor";
  }, []);
  return (
    <>
      <Hero />
      {/* <Service /> */}
      <Project />
      {/* <Testimonies /> */}
      {/* <BlogComponent /> */}
      <Technologies />
      <Contact />
    </>
  );
};

export default Portfolio;
