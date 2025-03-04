import react from "react";  

function Education() {
    return (
      <section id="education">
        <h2>education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <img src="logos/auth_logo_bkg.png" alt="AUTH Logo" className="uni-logo" />
            <div className="timeline-content">
              <h3>Bachelor's in Physics</h3>
              <h4>Aristotle University of Thessaloniki • 2014 - 2019</h4>
              <p>Focused on Atmospheric Physics and Nuclear Astrophysics.</p>
              <p>Member of Space & Aeronautics Team as Orbital Engineer.</p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="logos/Amsterdamuniversitylogo.svg.png" alt="University of Amsterdam Logo" className="uni-logo" />
            <div className="timeline-content">
              <h3>Master's in Astroparticle Physics</h3>
              <h4>University of Amsterdam • 2021 - 2024</h4>
              <p>Specialized in machine learning applications for dark matter research.</p>
              <p>Enhanced low-cost air quality sensors with machine learning algorithms for better sensitivity and precision.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Education;