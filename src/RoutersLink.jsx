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
    path: "/jobs",
    element: <Jobs />,
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
