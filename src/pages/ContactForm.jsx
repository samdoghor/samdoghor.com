import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";

const ContactForm = () => {
  useEffect(() => {
    document.title = "Contact | Samuel Doghor";
  }, []);
  return (
    <>
      <MaintenanceMode
        pagetitle="Contact Page"
        expectedCompletion="Wednesday, 20th Decemver, 2023"
      />
    </>
  );
};

export default ContactForm;
