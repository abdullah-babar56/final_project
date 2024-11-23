import React, { useState } from 'react';
import './ListingCard.css';

const ListingCard = ({ images, title, location, price, authorImage, rating, dateRange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="listing-card">
      <div className="image-slider">
        <img src={images[currentIndex]} alt={title} className="listing-image" />
        <button className="prev-btn" onClick={handlePrev}>❮</button>
        <button className="next-btn" onClick={handleNext}>❯</button>
      </div>
      <div className="listing-info">
        <h3>{location}</h3>
        <p>{title}</p>
        <p className="listing-price">${price} / night</p>
        <p className="listing-dates">{dateRange}</p>
        <div className="listing-footer">
          <img src={authorImage} alt="Host" className="author-image" />
          <span className="listing-rating">★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
