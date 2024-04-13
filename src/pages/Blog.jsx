import MaintenanceMode from "../components/MaintenanceMode";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <div>
        <Helmet>
          <title> Blog | Samuel Doghor </title>

          <meta property="title" content="Blog | Samuel Doghor" />
          <meta property="og:title" content="Blog | Samuel Doghor" />
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
        pagetitle="Blog Page"
        expectedCompletion="Sunday, 31st March, 2024"
      />
    </>
  );
};

export default Blog;
