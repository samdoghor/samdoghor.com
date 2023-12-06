import { Routes, Route } from "react-router-dom";
import { Portfolio, Blog, Courses, ContactForm, NotFound, Jobs, JobsCMS } from "./Index";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/jobs-cms" element={<JobsCMS />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
