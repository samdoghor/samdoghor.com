import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

import PropTypes from "prop-types";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isThemeReady, setIsThemeReady] = useState(false);

  useEffect(() => {
    let initialTheme = "light";
    try {
      const savedTheme = localStorage.getItem("theme");
      initialTheme =
        savedTheme ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");
    } catch {
      initialTheme = "light";
    }
    setTheme(initialTheme);
    setIsThemeReady(true);
  }, []);

  useEffect(() => {
    if (!isThemeReady) return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // The theme still applies when storage is unavailable.
    }
  }, [isThemeReady, theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
