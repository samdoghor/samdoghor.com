import { Hero, Project, Technologies, Contact, Service } from "../Index";
import Helmet from "react-helmet";

const Portfolio = () => {
  return (
    <>
      <div>
        <Helmet>
          <title> Portfolio | Samuel Doghor </title>

          <meta property="title" content="Portfolio | Samuel Doghor" />
          <meta property="og:title" content="Portfolio | Samuel Doghor" />
          <meta
            property="description"
            content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
          />
          <meta
            property="og:description"
            content="Software Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
          />
          <meta property="image" content="/img/doghs.jpg" />
          <meta property="og:image" content="/img/doghs.jpg" />
        </Helmet>
      </div>
      <Hero />
      <Service />
      <Project />
      {/* <Testimonies /> */}
      {/* <BlogComponent /> */}
      <Technologies />
      <Contact />
    </>
  );
};

export default Portfolio;
