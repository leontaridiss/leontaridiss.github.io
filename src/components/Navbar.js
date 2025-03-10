import React, { useState } from "react";
// import "../styles/navigation.css";

function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60, // adjust for navbar height
            behavior: "smooth",
          });
        }
        setMobileOpen(false); // close mobile menu when link is clicked
      }
    };
  
    return (
      <header>
        <button
          className={`menu-toggle ${mobileOpen ? "active" : ""}`}
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className="menu-bar"></div>
        <div className={`mobile-menu ${mobileOpen ? "open" : ""}`} id="mobile-menu">
          <a href="#home" onClick={handleNavClick}>home</a>
          <a href="#about" onClick={handleNavClick}>about me</a>
          <a href="#experience" onClick={handleNavClick}>work</a>
          <a href="#research" onClick={handleNavClick}>research</a>
          <a href="#education" onClick={handleNavClick}>education</a>
          <div className="mobile-icons">
            <a
              href="https://www.linkedin.com/in/konstantinos-leontaridis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 1 26 26">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
              </svg>
            </a>
            <a
              href="https://github.com/leontaridiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.91 1.53 2.38 1.09 2.96.83.09-.66.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.67.92.67 1.85v2.75c0 .27.17.59.67.48A10.004 10.004 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
              </svg>
            </a>
            <a href="mailto:leontaridiss@gmail.com">
              <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"/>
              </svg>
            </a>
          </div>
        </div>
        <nav>
          <ul className="nav-left">
            <li><a href="#home" onClick={handleNavClick}>home</a></li>
            <li><a href="#about" onClick={handleNavClick}>about me</a></li>
            <li><a href="#experience" onClick={handleNavClick}>work</a></li>
            <li><a href="#research" onClick={handleNavClick}>research</a></li>
            <li><a href="#education" onClick={handleNavClick}>education</a></li>
          </ul>
          <ul className="nav-right">
            <li>
              <a
                href="https://www.linkedin.com/in/konstantinos-leontaridis"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 1 26 26">
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/leontaridiss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.91 1.53 2.38 1.09 2.96.83.09-.66.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.56 4.94.36.31.67.92.67 1.85v2.75c0 .27.17.59.67.48A10.004 10.004 0 0 0 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="mailto:leontaridiss@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"/>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  

export default NavBar;
