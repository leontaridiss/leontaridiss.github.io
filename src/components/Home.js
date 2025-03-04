import React, { useEffect, useState , useRef} from "react";
// import "../styles/sections.css";

function Home() {
    const [typedText, setTypedText] = useState("");
    const hasRun = useRef(false);
    const [downloadText, setDownloadText] = useState("Download CV");
  
    // Typed text effect
    useEffect(() => {
      if (hasRun.current) return; // Prevent running the effect again
      hasRun.current = true;
      const text = "Hi, I'm Kostas";
      let index = 0;
      function typeEffect() {
        if (index < text.length) {
          setTypedText((prev) => prev + text.charAt(index));
          index++;
          setTimeout(typeEffect, 150);
        }
      }
      typeEffect();
    }, []);
  
    const handleDownload = () => {
      setDownloadText("Downloading...");
      setTimeout(() => {
        setDownloadText("Download CV");
      }, 2000);
    };
  
    return (
      <section id="home">
        <h1 className="typed-text">
          <span id="text">{typedText}</span>
          <span className="cursor"></span>
        </h1>
        <p>
          I am a data scientist from Skydra, Greece with a background in physics.
          Driven by curiosity for problem-solving, I blend analytical thinking with data to turn complexity into clarity.
        </p>
        <a
          href="assets/Kostas_CV.pdf"
          download="Kostas_CV.pdf"
          className="download-btn"
          onClick={handleDownload}
        >
          <span>{downloadText}</span>
        </a>
      </section>
    );
  }

export default Home;

