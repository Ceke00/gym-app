import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/home.json";

function HalfSection() {
   const [content, setContent] = useState({
     text: { heading: "", paragraphs: [] },
     alt: "",
     image:""
   });

   useEffect(() => {
     if (data.half) {
       setContent(data.half);
     }
   }, []);

  return (
    <Container fluid="lg" className="half-section">
      <Row className="d-flex flex-column flex-md-row">
        <Col md={6}>
          <h2>{content.text.heading}</h2>
          {content.text.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Col>
        <Col md={6}>
          <img
            src={`${process.env.PUBLIC_URL}${content.image}`}
            alt={content.alt}
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HalfSection;
