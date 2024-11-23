import React, { useState, useEffect } from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingGrid.css';

// Sample mock data (for now)
const allListings = [
  {
    id: 1,
    images: ['/assets/listings/listing1-1.jpg', '/assets/listings/listing1-2.jpg', '/assets/listings/listing1-3.jpg'],
    title: 'Stay with Sergio - Movie Producer',
    location: 'Rome, Italy',
    price: 86,
    dateRange: 'Dec 19–24',
    authorImage: '/assets/authors/author1.jpg',
    rating: 4.86,
    category: 'Rooms', // Added category
  },
  {
    id: 2,
    images: ['/assets/listings/listing2-1.jpg', '/assets/listings/listing2-2.jpg', '/assets/listings/listing2-3.jpg'],
    title: 'Stay with Julia - Insurance',
    location: 'Schwechat, Austria',
    price: 46,
    dateRange: 'Jan 6–11',
    authorImage: '/assets/authors/author2.jpg',
    rating: 4.92,
    category: 'Amazing views', // Added category
  },
  // Add more listings as needed
];

const ListingGrid = ({ selectedCategory }) => {
  const [listings, setListings] = useState(allListings);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setListings(allListings);
    } else {
      setListings(allListings.filter((listing) => listing.category === selectedCategory));
    }
  }, [selectedCategory]); // Re-fetch listings when category changes

  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
