// DarkModeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const DarkModeContext = createContext();

// Custom hook to use dark mode context
export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

// Provider component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // On first render, check localStorage for dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
