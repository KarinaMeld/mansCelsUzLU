import React from "react";
import "./LandingPage.css";

const landing = () => {
  return (
    <div className="landing-page">
      <h1>mans ceļš uz Latvijas Universitāti</h1>
      <div className="landing-image">
        <img src="././public/images/img-replace.png" alt="Landing" />
      </div>
      <div className="steps">
        <div className="step">
          <div className="step-image">
            <img src="././public/images/img-replace.png" alt="Step 1" />
          </div>
          <div className="step-description">
            <h2>mājas</h2>
            <p>Īss pirmā posma apraksts, patiešām īss, tikai pāris teikumi</p>
          </div>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="././public/images/img-replace.png" alt="Step 2" />
          </div>
          <div className="step-description">
            <h2>autobusa pietura</h2>
            <p>Īss otrā posma apraksts, patiešām īss, tikai pāris teikumi</p>
          </div>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="././public/images/img-replace.png" alt="Step 3" />
          </div>
          <div className="step-description">
            <h2>Rīga</h2>
            <p>Īss trešā posma apraksts, patiešām īss, tikai pāris teikumi</p>
          </div>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="././public/images/img-replace.png" alt="Step 4" />
          </div>
          <div className="step-description">
            <h2>tramvajs</h2>
            <p>Īss ceturtā posma apraksts, patiešām īss, tikai pāris teikumi</p>
          </div>
        </div>
        <div className="step">
          <div className="step-image">
            <img src="././public/images/img-replace.png" alt="Step 5" />
          </div>
          <div className="step-description">
            <h2>LU</h2>
            <p>Īss piektā posma apraksts, patiešām īss, tikai pāris teikumi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landing;
