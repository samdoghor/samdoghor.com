import { createBrowserRouter } from "react-router-dom";
import {
  Portfolio,
  Blog,
  NotFound,
  Courses,
  ContactForm,
  JobsCMS,
  Jobs,
  Gide,
} from "./Index";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/blog",
    element: <Blog />,
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
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/gide",
    element: <Gide />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routers;
