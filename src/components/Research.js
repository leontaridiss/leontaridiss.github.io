import React from 'react';

function Research() {
    return (
      <section id="research">
        <h2>research experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <img src="logos/GRAPPA_logo.png" alt="AUTH Logo" className="research-logo" />
            <div className="timeline-content">
              <h3>GRAPPA/Undark Group</h3>
              <h4>Graduate Student • Sept. 2022 - Oct. 2023</h4>
              <p>
                Developed a simulation-based inference pipeline to analyze Stellar Streams and constrain the Galactic potential.
              </p>
              <p>
                Employed advanced deep neural networks and conducted extensive simulations using the Snellius cluster.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <img src="logos/auth_logo_bkg.png" alt="University of Amsterdam Logo" className="research-logo" />
            <div className="timeline-content">
              <h3>Environmental Informatics Group</h3>
              <h4>Research Assistant • Sept. 2020 - Sept. 2021</h4>
              <p>
                Enhanced low-cost air quality sensors with machine learning algorithms for better sensitivity and precision.
              </p>
              <p>
                Analyzed the calibrated time series data for trend projection and air pollution forecasting.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default Research;