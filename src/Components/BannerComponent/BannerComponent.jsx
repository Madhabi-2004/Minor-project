import React, { useState, useEffect } from 'react';
// import Img from '../../asset/background.jpg'
import './Banner.css'


const BannerComponent = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change the interval as needed

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index} style={{ backgroundImage: `url(${slide.image})`  }}>
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerComponent;


