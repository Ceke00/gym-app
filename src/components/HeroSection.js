import React from "react";
import "./HeroSection.scss";
import heroVideo from "../videos/hero.mp4";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function HeroSection() {
  return (
    <header className="hero" id="home">
      <Container fluid="lg" className="hero-content">
        <h1>Stay fit and get the body you want</h1>
        <p>Get one free PT-training session.</p>
        <Link to="/becomemember" className="btn btn-warning">
          Join Now
        </Link>
      </Container>
      <div className="hero-mobile-bg"></div>
      <div className="hero-video">
        <video
          id="bg-video"
          src={heroVideo}
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          controls={false}
          playsInline
        ></video>
      </div>
    </header>
  );
}

export default HeroSection;
