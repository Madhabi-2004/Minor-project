import React, { useState } from 'react';
import './Card.css'; // Make sure to import your CSS file

const Card = ({ image, title, price }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-box${isFlipped ? ' flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <div className="innr">
            <img src={image} alt={title} />
            <h5>{title}</h5>
            <div className="content">
              <p className="Price">Starting Price</p>
              <p className="Amount">{price}/-</p>
            </div>
          </div>
        </div>
        <div className="flip-box-back">
          <h2>Package</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam vitae neque, tempore minus tempora non
            laboriosam quo! Inventore officiis unde exercitationem accusantium quo eum molestias nam consequuntur ab
            sapiente sed sint, esse, provident earum nobis, deserunt quidem quisquam eligendi
          </p>
          <p>Contact: +91 98833 81031</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
