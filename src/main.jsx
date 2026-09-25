import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import routers from "./RoutersLink";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={routers} />
      </ThemeProvider>
    </HelmetProvider>
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
