import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../data/data.json";

function HalfSection({ section }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (data[section] && data[section].content) {
      setContent(data[section].content);
    }
  }, [section]);

  return (
    <Container fluid="lg" className="half-section my-5">
      {content.map((item, index) => (
        <Row key={index} className="d-flex flex-column flex-md-row my-4">
          <Col md={6}>
            <h2>{item.heading}</h2>
            {item.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </Col>
          <Col md={6}>
            <img
              src={`${process.env.PUBLIC_URL}${item.image}`}
              alt={item.alt}
              className="img-fluid"
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default HalfSection;
