import React from 'react'
import HalfSection from "../components/HalfSection"
import "./About.scss"
import { Container } from 'react-bootstrap';

function About() {
  return (
    <>
      <header id="bg-image">
        <Container fluid="lg">
          <h1>About Home Fitness </h1>
        </Container>
      </header>
      <HalfSection section="about" />
    </>
  );
}

export default About
