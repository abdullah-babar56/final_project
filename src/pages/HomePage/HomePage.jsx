import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Categories from '../../components/Categories/Categories';
import ListingCard from '../../components/ListingCard/ListingCard';
import Footer from '../../components/Footer/Footer';
import listings from '../../data/mockListings.json';

const HomePage = () => (
  <div>
    <Navbar />
    <SearchBar />
    <Categories />
    <div className="listings">
      {listings.map((listing) => (
        <ListingCard key={listing.id} {...listing} />
      ))}
    </div>
    <Footer />
  </div>
);

export default HomePage;
