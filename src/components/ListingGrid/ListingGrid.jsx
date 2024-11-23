import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingGrid.css';

const listings = [
  {
    id: 1,
    images: [
      '/assets/listings/listing1-1.jpg',
      '/assets/listings/listing1-2.jpg',
      '/assets/listings/listing1-3.jpg',
    ],
    title: 'Stay with Sergio - Movie Producer',
    location: 'Rome, Italy',
    price: 86,
    dateRange: 'Dec 19–24',
    authorImage: '/assets/authors/author1.jpg',
    rating: 4.86,
  },
  {
    id: 2,
    images: [
      '/assets/listings/listing2-1.jpg',
      '/assets/listings/listing2-2.jpg',
      '/assets/listings/listing2-3.jpg',
    ],
    title: 'Stay with Julia - Insurance',
    location: 'Schwechat, Austria',
    price: 46,
    dateRange: 'Jan 6–11',
    authorImage: '/assets/authors/author2.jpg',
    rating: 4.92,
  },
];

const ListingGrid = () => {
  return (
    <div className="listing-grid">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
  );
};

export default ListingGrid;
