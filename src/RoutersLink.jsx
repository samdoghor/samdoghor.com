import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  Knowledge,
  NotFound,
  Courses,
  ContactForm,
  Marketplace,
  JobsCMS,
  Jobs,
  WordPressPost,
  // Gide,
} from "./Index";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/insights",
    element: <Knowledge />,
  },
  {
    path: "/insights/:slug",
    element: <WordPressPost categorySlug="samdoghor" label="Insight" />,
  },
  {
    path: "/marketplace",
    element: <Marketplace />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
  {
    path: "/jobs-cms",
    element: <JobsCMS />,
  },
  {
    path: "/projects",
    element: <Jobs />,
  },
  {
    path: "/projects/:slug",
    element: <WordPressPost categorySlug="samdoghor-projects" label="Project" />,
  },
  // {
  //   path: "/gide",
  //   element: <Gide />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
