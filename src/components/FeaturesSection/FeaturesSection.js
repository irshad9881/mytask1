import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => (
  <section className="features-section">
    <h2>Onboard Business in 3 Simple Steps</h2>
    <div className="features">
      <div className="feature">
        <span>1</span>
        <h3>Claim your preset profile</h3>
        <p>Unlock tools and connect seamlessly.</p>
      </div>
      <div className="feature">
        <span>2</span>
        <h3>Add services</h3>
        <p>Start offering and tracking services instantly.</p>
      </div>
      <div className="feature">
        <span>3</span>
        <h3>Build website</h3>
        <p>Attract clients with your professional presence.</p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
