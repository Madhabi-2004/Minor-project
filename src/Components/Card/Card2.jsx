import React from 'react';
import Card from './Card';
import Himachal from'../../asset/Himachal.jpg'
import Andaman from '../../asset/ANDAMAN-NICOBAR-ISLANDS.jpg'
import Kerala from '../../asset/Kerala.jpg'
import Odissa from '../../asset/Odissa.jpg'
// import Rajasthan from  '../../asset/Rajasthan.jpg'

const Card2 = () => {
  const tours = [
    { id: 1, image: Himachal, title: 'Rajasthan', price: 21900 },
    { id: 2, image: Andaman, title: 'Andaman', price: 16900 },
    { id: 3, image: Kerala, title: 'Kerala', price: 12500 },
    { id: 4, image: Odissa, title: 'Odissa', price: 10500 },
    // { id: 5, image: Rajasthan, title: 'Himachal', price: 12900 },
  ];

  return (
    <section className="Cards">
      <div className="container">
        {tours.map((tour) => (
          <Card key={tour.id} image={tour.image} title={tour.title} price={tour.price} />
        ))}
      </div>
    </section>
  );
};

export default Card2;
