import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./RoutersLink";
import { ThemeProvider } from "./components/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={routers} />
    </ThemeProvider>
    {/* <BrowserRouter>
        <App />
    </BrowserRouter> */}
  </React.StrictMode>
);
