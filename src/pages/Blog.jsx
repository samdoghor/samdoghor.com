import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Samuel Doghor";
  }, []);
  return (
    <>
      <MaintenanceMode
        pagetitle="Blog Page"
        expectedCompletion="Saturday, 20th January, 2023"
      />
    </>
  );
};

export default Blog;
