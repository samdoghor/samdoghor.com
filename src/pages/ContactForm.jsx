import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  useEffect(() => {
    document.title = "Contact | Samuel Doghor";
  }, []);

  const [formData, setFormData] = useState({
    companyName: "",
    yourName: "",
    phoneNumber: "",
    emailAddress: "",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        // "http://127.0.0.1:5000/contact-samdoghor",
        "https://entity-backend.vercel.app/contact-samdoghor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmissionStatus(
          "Your request was sent successfully. I will get in touch ASAP"
        );

        setTimeout(() => {
          window.location.reload();
        }, 5000);
      } else {
        setSubmissionStatus(
          "Your request was not successful, please try again."
        );
      }
      // } catch (error) {
      //   console.error("Error sending message:", error);
      //   setSubmissionStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences."
        />
        <meta property="og:title" content="Contact | Samuel Doghor" />
        <meta
          property="og:description"
          content="Engineer skilled in scalable architecture for accessible digital systems and interfaces, passionate about seamless user experiences"
        />
        <meta property="og:image" content="/img/doghs.jpg" />
      </Helmet>
      <div className="">
        <div className="container mx-auto py-20">
          <div className="py-24 md:grid md:grid-cols-2 gap-20">
            <div className="">
              <p className="text-5xl overflow-hidden font-novaSquare py-4 leading-12 text-white">
                {"Hi. Let's talk about your project."}
              </p>
              <motion.p
                className="text-lg overflow-hidden font-inconsolata py-4 leading-10 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                You can either fillout the form below or reach me via
                <motion.a
                  href="https://wa.me/qr/CGHZ23GBYBKLC1"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-white underline underline-offset-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  WhatsApp
                </motion.a>
                or Email me:
                <motion.a
                  href="mailto:talkto@samdoghor.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 text-white underline underline-offset-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  talkto@samdoghor.com
                </motion.a>
                or Call me:
                <motion.a
                  href="tel:+2348031390921"
                  target="_blank"
                  rel="noreferrer"
                  className="ps-2 text-white underline underline-offset-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  +2348031390921
                </motion.a>
              </motion.p>

              <div className="font-inconsolata">
                <form
                  className="mt-8"
                  autoComplete="on"
                  name="contactForm"
                  id="contactForm"
                >
                  <div className="my-12">
                    <motion.input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      autoFocus
                      className="w-[50%] h-16 font-semibold text-base border-0 bg-gray-100 "
                      transition={{ duration: 1 }}
                      whileFocus={{
                        borderBottom: "solid 5px #8aa3f2",
                      }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      value={formData.companyName} // Bind the value
                      onChange={handleInputChange} // Handle input change
                    />
                  </div>
                  <div className="my-12">
                    <motion.input
                      type="text"
                      id="yourName"
                      name="yourName"
                      placeholder="Your Name"
                      required
                      className="w-[50%] h-16 font-semibold text-base border-0 bg-gray-100 "
                      transition={{ duration: 1 }}
                      whileFocus={{
                        borderBottom: "solid 5px #8aa3f2",
                      }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      value={formData.yourName} // Bind the value
                      onChange={handleInputChange} // Handle input change
                    />
                  </div>
                  <div className="my-12">
                    <motion.input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      required
                      className="w-[50%] h-16 font-semibold text-base border-0 bg-gray-100 "
                      transition={{ duration: 1 }}
                      whileFocus={{
                        borderBottom: "solid 5px #8aa3f2",
                      }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      value={formData.phoneNumber} // Bind the value
                      onChange={handleInputChange} // Handle input change
                    />
                  </div>
                  <div className="my-12">
                    <motion.input
                      id="emailAddress"
                      name="emailAddress"
                      placeholder="Email Address"
                      required
                      type="email"
                      className="w-[50%] h-16 font-semibold text-base border-0 bg-gray-100 "
                      transition={{ duration: 1 }}
                      whileFocus={{
                        borderBottom: "solid 5px #8aa3f2",
                      }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      value={formData.emailAddress} // Bind the value
                      onChange={handleInputChange} // Handle input change
                    />
                  </div>
                  <div className="my-12">
                    <motion.textarea
                      rows="12"
                      required
                      placeholder="State your purpose of reaching out || Share the package you chose, project info: scope, timeline, and budget."
                      id="projectDetails"
                      name="projectDetails"
                      className="w-[50%] font-semibold text-base border-0 bg-gray-100 "
                      transition={{ duration: 1 }}
                      whileFocus={{
                        borderBottom: "solid 5px #8aa3f2",
                      }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      value={formData.projectDetails} // Bind the value
                      onChange={handleInputChange} // Handle input change
                    ></motion.textarea>
                  </div>
                  <div className="mx-auto flex justify-center overflow-hidden">
                    <motion.button
                      type="submit"
                      className="w-[50%] h-16 font-semibold border-0 bg-cyan-950 text-white hover:bg-cyan-700 hover:text-black text-xl overflow-hidden"
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      {isSubmitting ? "Submitting..." : "Submit request"}
                    </motion.button>
                  </div>
                </form>

                {submissionStatus && (
                  <p className="text-lg overflow-hidden py-4 leading-10 text-center font-bold font-sansita text-white">
                    {submissionStatus}
                  </p>
                )}
              </div>
            </div>
            <motion.div
              className="grayscale hover:grayscale-0 hover:cursor-pointer"
              style={{
                backgroundImage: "url('img/v-s-4.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover, auto",
                backgroundPosition: "center",
              }}
              initial={{
                marginTop: 0,
                marginBottom: "100vw",
                transition: { delay: 0.2, duration: 1.5, ease: "easeInOut" },
              }}
              animate={{
                marginTop: "0vw",
                marginBottom: "0vw",
                transition: { delay: 0.1, duration: 5, ease: "easeInOut" },
              }}
              exit={{
                marginLeft: 0,
                marginRight: 0,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
      {/* <MaintenanceMode
        pagetitle="Contact Page"
        expectedCompletion="Wednesday, 20th December, 2023"
      /> */}
    </>
  );
};

export default ContactForm;
