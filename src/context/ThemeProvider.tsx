import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  getThemeClassName: () => string;
  getInputClassName: () => string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isWindowChecked, setIsWindowChecked] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      setTheme(storedTheme ? storedTheme : "light");
      setIsWindowChecked(true);
    }
  }, []);

  const getInputClassName = () => {
    const inputClassName =
      theme === "dark" ? "bg-zinc-500 text-white border-zinc-700" : "bg-zinc-100 text-black border-blue-500";
    return inputClassName;
  };

  const getThemeClassName = () => {
    const themeClassName =
      theme === "dark" ? "bg-zinc-800 text-white" : "bg-white text-black";

    return themeClassName;
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  if (!isWindowChecked) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, getThemeClassName, getInputClassName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
