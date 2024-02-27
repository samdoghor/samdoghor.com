import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";
import { Helmet } from "react-helmet";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Samuel Doghor";
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
        />
        <meta property="og:title" content="Blog | Samuel Doghor" />
        <meta
          property="og:description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
        />
        <meta property="og:image" content="/img/doghs.jpg" />
      </Helmet>
      <MaintenanceMode
        pagetitle="Blog Page"
        expectedCompletion="Sunday, 31st March, 2024"
      />
    </>
  );
};

export default Blog;
