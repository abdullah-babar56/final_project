import React from "react";
import ListingCard from "../ListingCard/ListingCard";
import "./ListingGrid.css";

const ListingGrid = ({ listings, selectedCategory, searchQuery, onListingSelect }) => {
  const filteredListings = listings.filter((listing) => {
    return (
      (selectedCategory === "All" || listing.category === selectedCategory) &&
      (listing.title.toLowerCase().includes(searchQuery.location.toLowerCase()) ||
        listing.location.toLowerCase().includes(searchQuery.location.toLowerCase()))
    );
  });

  return (
    <div className="listing-grid">
      {filteredListings.map((listing) => (
        <ListingCard
          key={listing.id}
          {...listing}
          onClick={() => onListingSelect(listing)} // On click, select the listing
        />
      ))}
    </div>
  );
};

export default ListingGrid;
