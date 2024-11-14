import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/home.json";
import girl from "../images/pexels-pixabay-416778.jpg"; 

function HalfSection() {
   const [content, setContent] = useState({
     text: { heading: "", paragraphs: [] },
     alt: "",
   });

   useEffect(() => {
     if (data.half) {
       setContent(data.half);
     }
   }, []);

  return (
    <Container fluid="lg" className="half-section">
      <Row className="d-flex flex-column flex-md-row">
        <Col md={6} className="order-md-2">
          <img src={girl} alt={content.alt} className="img-fluid" />
        </Col>
        <Col md={6} className="order-md-1">
          <h2>{content.text.heading}</h2>
          {content.text.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default HalfSection;
