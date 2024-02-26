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
        expectedCompletion="Sunday, 31st March, 2024"
      />
    </>
  );
};

export default Blog;
