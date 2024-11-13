import React from "react";
import "./HeroSection.scss";
import hero from "../videos/hero.mp4";

function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Stay fit and get the body you want</h1>
        <p>Get one free PT-training session.</p>
        <a href="#about" className="btn">
          Join Now
        </a>
      </div>

      <div className="hero-video">
        <video
          id="bg-video"
          src={hero}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls={false}
        ></video>
      </div>
    </section>
  );
}

export default HeroSection;
