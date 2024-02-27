import { Hero, Project, Technologies, Contact } from "../Index";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Samuel Doghor";
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
        />
        <meta property="og:title" content="Portfolio | Samuel Doghor" />
        <meta
          property="og:description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
        />
        <meta property="og:image" content="/img/doghs.jpg" />
      </Helmet>

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
