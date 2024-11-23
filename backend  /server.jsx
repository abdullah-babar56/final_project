// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize the Express app
const app = express();

// Use CORS to allow cross-origin requests (for React)
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mock JSON data for property listings
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
  // Add more listings as needed...
];

// Create routes for listings
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// Route for a single listing's details (dynamic)
app.get('/api/listing/:id', (req, res) => {
  const listingId = parseInt(req.params.id);
  const listing = listings.find((listing) => listing.id === listingId);
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ message: "Listing not found" });
  }
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
