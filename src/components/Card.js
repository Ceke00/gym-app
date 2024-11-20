import React from "react";
import CardComponent from "react-bootstrap/Card";
//import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ image, title, description, alt }) {
  return (
    <Link to="/userpage" className="text-decoration-none">
      <CardComponent
        className="card-component bg-dark cursor-pointer"
        style={{ width: "100%" }}
      >
        <CardComponent.Img variant="top" src={image} className="img-fluid" alt={alt} />
        <CardComponent.Body>
          <CardComponent.Title>
            {title}
          </CardComponent.Title>
          <CardComponent.Text>{description}</CardComponent.Text>
        </CardComponent.Body>
      </CardComponent>
    </Link>
  );
}

export default Card;
