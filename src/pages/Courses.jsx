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
        expectedCompletion="Wednesday, 31st January, 2024"
      />
    </>
  );
};

export default Courses;
