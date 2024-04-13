import MaintenanceMode from "../components/MaintenanceMode";
import Helmet from "react-helmet";

const Courses = () => {
  return (
    <>
      <div>
        <Helmet>
          <title> Courses | Samuel Doghor </title>

          <meta property="title" content="Courses | Samuel Doghor" />
          <meta property="og:title" content="Courses | Samuel Doghor" />
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
      <MaintenanceMode
        pagetitle="Courses Page"
        expectedCompletion="Sunday, 30th June, 2024"
      />
    </>
  );
};

export default Courses;
