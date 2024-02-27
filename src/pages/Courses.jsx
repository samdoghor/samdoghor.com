import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";
import { Helmet } from "react-helmet";

const Courses = () => {
  useEffect(() => {
    document.title = "Courses | Samuel Doghor";
  }, []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
        />
        <meta property="og:title" content="Courses | Samuel Doghor" />
        <meta
          property="og:description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
        />
        <meta property="og:image" content="/img/doghs.jpg" />
      </Helmet>
      <MaintenanceMode
        pagetitle="Courses Page"
        expectedCompletion="Sunday, 30th June, 2024"
      />
    </>
  );
};

export default Courses;
