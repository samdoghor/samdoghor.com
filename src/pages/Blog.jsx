import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Samuel Doghor";
  }, []);
  return (
    <>
      <MaintenanceMode pagetitle="Blog Page"
        expectedCompletion="Friday, 20th November, 2023"/>
    </>
  );
};

export default Blog;
