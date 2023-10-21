import { useEffect } from "react";
import MaintenanceMode from "../components/MaintenanceMode";

const ContactForm = () => {
  useEffect(() => {
    document.title = "Contact | Samuel Doghor";
  }, []);
  return (
    <>
      <MaintenanceMode pagetitle="Contact Page"
        expectedCompletion="Friday, 20th November, 2023"/>
    </>
  );
};

export default ContactForm;
