import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data));
  }, [id]);

  if (!listing) return <p>Loading...</p>;

  return (
    <div>
      <img src={listing.image} alt={listing.title} />
      <h1>{listing.title}</h1>
      <p>{listing.type}</p>
      <p>Guests: {listing.guests}</p>
      <p>Price: ${listing.price}/night</p>
      <Link to={`/book/${listing.id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default ListingDetails;
