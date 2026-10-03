import { index, route } from "@react-router/dev/routes";

export default [
  index("pages/Portfolio.jsx"),
  route("insights", "pages/Blog.jsx"),
  route("insights/:slug", "routes/InsightPost.jsx"),
  route("marketplace", "pages/Marketplace.jsx"),
  route("courses", "pages/Courses.jsx"),
  route("contact", "pages/ContactForm.jsx"),
  route("jobs-cms", "pages/JobsCMS.jsx"),
  route("projects", "pages/Jobs.jsx"),
  route("projects/:slug", "routes/ProjectPost.jsx"),
  route("*", "pages/NotFound.jsx"),
];