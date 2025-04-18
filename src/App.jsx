import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeDark } from "./screens/HomeDark";
import { AboutMe } from "./pages/AboutPage"; // We'll create this next
import { NavigationSection } from "./screens/HomeDark/NavigationSection/NavigationSection";

function App() {

  // Dark Mode Toggle
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Set theme on mount (after localStorage is available)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to dark mode and store it
      localStorage.setItem("theme", "dark");
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };
  
  // Optional: add/remove a class on the <html> tag for Tailwind
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  
  return (
    <Router>
      <div className={`${isDarkMode ? 'bg-neutral-950' : 'bg-white'} flex flex-col items-center w-full`}>
        <div className={`${isDarkMode ? 'bg-neutralblack' : 'bg-white'} w-full max-w-[1440px] relative`}>
        <NavigationSection isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

        <Routes>
          <Route path="/" element={<HomeDark isDarkMode={isDarkMode}/>} />
          <Route path="/about" element={<AboutMe isDarkMode={isDarkMode}/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
