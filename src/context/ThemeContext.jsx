import { createContext, useContext, useEffect, useState } from "react";

export const ContextTheme = createContext();

export const ThemeContext = ({ children }) => {
  const [mode, setMode] = useState(false);

  useEffect(() => {
    const save = localStorage.getItem("Theme");

    if (save === "dark") {
      document.documentElement.classList.add("dark");
      setMode(true);
    }
  }, []);

  const handleToggle = () => {
    if (mode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("Theme", "Light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme", "Dark");
    }
    setMode(!mode)
  };

  return (
    <ContextTheme.Provider value={{ mode, setMode, handleToggle }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const ThContext = () => useContext(ContextTheme);
