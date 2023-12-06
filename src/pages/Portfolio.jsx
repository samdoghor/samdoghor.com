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
      <Technologies />
      {/* <Testimonies /> */}
      <Contact />
    </>
  );
};

export default Portfolio;
