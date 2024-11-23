import React from "react";
import "./ListingDetail.css";

const ListingDetail = ({ listing }) => {
  return (
    <div className="listing-detail">
      <h1>{listing.title}</h1>
      <img src={listing.images[0]} alt={listing.title} />
      <p>{listing.location}</p>
      <p>{listing.price}</p>
      <p>{listing.dateRange}</p>
      <p>Rating: {listing.rating}</p>
      {/* You can add more listing details as needed */}
    </div>
  );
};

export default ListingDetail;
