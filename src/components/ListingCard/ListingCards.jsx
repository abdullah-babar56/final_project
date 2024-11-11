import React from 'react';
import styles from './ListingCard.module.css';

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => (
  <div className={styles.card}>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{type}</p>
    <p>{guests} guests · {bedrooms} bedrooms · {bathrooms} bathrooms</p>
    <p>${price} per night</p>
    <p>⭐ {rating}</p>
  </div>
);

export default ListingCard;
