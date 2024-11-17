import React from "react";
import { Link } from "react-router-dom";

const ListingCard = ({ listing }) => {
  return (
    <div>
      <img src={listing.image} alt={listing.title} />
      <h3>{listing.title}</h3>
      <Link to={`/listings/${listing.id}`}>View Details</Link>
    </div>
  );
};

export default ListingCard;
