import React from 'react';
import Card from './Card';  // Importing the Card component


import image1 from '../images/pexels-823sl-2294361.jpg';
import image2 from '../images/pexels-pixabay-416778.jpg';
import image3 from '../images/pexels-pixabay-209983.jpg';

function CardSection() {
  // Define an array of card data, passing imported images
  const cardData = [
    { id: 1, image: image1, title: 'Strength training' },  // Pass imported image1
    { id: 2, image: image2, title: 'Hopscotch hiit' },  // Pass imported image2
    { id: 3, image: image3, title: 'Yoga' },  // Pass imported image2
  ];


  return (
    <div className="container">
      <div className="cardsSection row ms-auto me-auto p-5">
        <h2 className='text-left mb-2'>New classes</h2>
        {cardData.map((data) => (
          <div key={data.id} className="col-md-4 card">
            <Card image={data.image} title={data.title} />  {/* Passing the correct props */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSection;


