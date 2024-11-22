import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="background-elements">
        <div className="square-grid"></div>
        <div className="decorative-circle"></div>
      </div>
      <div className="hero-content" data-aos="fade-up">
        <h1>
          <span className="line-animation">Transform Potential into Power</span>
          <span className="line-animation">Reach the 212-Degree Impact</span>
        </h1>
        <p data-aos="fade-in">
          Tailored coaching and training designed to bridge the gap between good and exceptional. Let’s take the extra step together.
        </p>
        <div className="hero-buttons">
          <a href="#services" className="button" data-aos="zoom-in">
            Explore Our Offerings
          </a>
          <a href="#contact" className="button secondary" data-aos="zoom-in">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;