import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";

const Courses = () => {
  useEffect(() => {
    document.title = "Courses | Samuel Doghor";
  }, []);
  return (
    <>
      <MaintenanceMode
        pagetitle="Courses Page"
        expectedCompletion="Sunday, 30th June, 2024"
      />
    </>
  );
};

export default Courses;
