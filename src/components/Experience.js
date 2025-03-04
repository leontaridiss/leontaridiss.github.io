import React from "react";
// import "../styles/sections.css";

function Experience() {
    return (
      <section id="experience">
        <h2>work experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <img src="logos/abnamro.png" alt="ABN AMRO logo" className="company-logo" />
            <div className="timeline-content">
              <h3>Data Scientist</h3>
              <h4>ABN AMRO Bank • Nov. 2023 - Nov. 2024</h4>
              <p>
                Involved in the development of an early warning system for predicting risky clients using survival analysis.
              </p>
              <p>
                Involved in the redevelopment of the Lease LGD model, focusing on the model pipeline optimization and reducing the overall runtime by 25% using PySpark.
              </p>
              <p>
                Implemented tasks on data visualization of the model outcome, improving the readability and interpretation of results.
              </p>
              <p>
                Created 20+ SQL queries for data collection and filtering to support model dataset development.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="logos/Deloitte_Logo.png" alt="Deloitte logo" className="deloitte-logo" />
            <div className="timeline-content">
              <h3>IT Audit Consultant</h3>
              <h4>Deloitte • June 2021 - Sept. 2021</h4>
              <p>
                Conducted IT audits, identified risks and assisted with data analysis and stakeholder interviews.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="logos/EMY_shield.svg.png" alt="EMY logo" className="company-logo" />
            <div className="timeline-content">
              <h3>Data Analyst/Meteorologist</h3>
              <h4>Hellenic National Meteorological Service • June 2021 - Sept. 2021</h4>
              <p>
                Created short-term weather forecasts for 7 airport locations in Greece using GFS and ECMWF models.
              </p>
              <p>
                Developed dynamic visualizations of meteorological data for presentations using PowerPoint.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Experience;
