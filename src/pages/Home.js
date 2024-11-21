import React from "react";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";
import HalfSection from "../components/HalfSection";
import Testimonials from "../components/Testimonials";
import "./Home.scss";
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
        <Helmet><title>Home Page Home Fitness</title></Helmet>
    <div>
      <HeroSection />
      <CardSection />
      <div id="bg-image" className="my-5"></div>
      <HalfSection section="home" />
      <Testimonials />
    </div>
    </>
  );
}

export default Home;
