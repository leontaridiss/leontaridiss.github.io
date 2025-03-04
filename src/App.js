import React, { useState, useEffect } from "react";
// Import your CSS files
import "./styles/fonts.css";
import "./styles/base.css";
import "./styles/navigation.css";
import "./styles/typography.css";
import "./styles/sections.css";
import "./styles/responsive.css";
import "./styles/downloads.css";

import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Research from "./components/Research";
import Education from "./components/Education";
import Footer from "./components/Footer";



function App() {
  // Scroll reveal effect: adds a "visible" class when sections enter the viewport.
  useEffect(() => {
    const revealSections = () => {
      const sections = document.querySelectorAll("section, #home p");
      sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (sectionPosition < screenPosition) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();
    return () => window.removeEventListener("scroll", revealSections);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Research />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
