import React from 'react'
import HalfSection from "../components/HalfSection"
import "./About.scss"
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
function About() {
  return (
    <>
        <Helmet><title>About Home Fitness</title></Helmet>
      <header id="bg-image-about">
        <Container fluid="lg">
          <h1>About Home Fitness </h1>
        </Container>
      </header>
      <HalfSection section="about" />
    </>
  );
}

export default About