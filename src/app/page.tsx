"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Generate from "./components/Generate";
import Gallery from "./components/Gallery";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    console.log('Home darkMode:', darkMode); // Debug state
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div>
      <Navbar
        lightLogoSize="h-9 w-9"
        darkLogoSize="h-5 w-5 ml-2"
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      <div className="flex items-left mt-18 ml-8">
        <Carousel darkMode={darkMode} />
      </div>
      <div>
        <Generate darkMode={darkMode} />
      </div>
      <div className="-mt-16">
        <Gallery darkMode={darkMode} />
      </div>
    </div>
  );
}
