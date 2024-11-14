import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import HalfSection from "../components/HalfSection";
import Testimonials from "../components/Testimonials";
import "./Home.scss";

function Home() {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <div id="bg-image" className="my-5"></div>
      <HalfSection />
      <Testimonials />
    </div>
  );
}

export default Home;
