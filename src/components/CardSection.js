import React from "react";
import Card from "./Card"; // Importing the Card component
import { Container } from "react-bootstrap";

import image1 from "../images/man_push_400.webp";
import image2 from "../images/woman_exc_400.webp";
import image3 from "../images/push_man2_400.webp";

function CardSection() {
  // Define an array of card data, passing imported images
  const cardData = [
    { id: 1, image: image1, title: "Strength training" }, // Pass imported image1
    { id: 2, image: image2, title: "Hopscotch hiit" }, // Pass imported image2
    { id: 3, image: image3, title: "Yoga" }, // Pass imported image2
  ];

  return (
    <Container fluid="lg">
      <div className="cardsSection row ms-auto me-auto my-5">
        <h2 className="text-left mb-2">New classes</h2>
        {cardData.map((data) => (
          <div key={data.id} className="col-md-4 g-4 card">
            <Card image={data.image} title={data.title} />{" "}
            {/* Passing the correct props */}
          </div>
        ))}
      </div>
    </Container>
  );
}

export default CardSection;
