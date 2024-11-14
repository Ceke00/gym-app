import React from 'react';
import Button from 'react-bootstrap/Button';
import CardComponent from 'react-bootstrap/Card';

function Card({ image, title }) {
  return (
    <CardComponent style={{ width: '100%' }}>
   
      <CardComponent.Img variant="top" src={image} className='img-fluid' />
      <CardComponent.Body>
        <CardComponent.Title>{title}</CardComponent.Title>
        <Button variant="primary">Get more information</Button>
      </CardComponent.Body>
    </CardComponent>
  );
}

export default Card;




