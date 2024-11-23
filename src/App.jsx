import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
import ListingGrid from "./components/ListingGrid/ListingGrid";
import Footer from "./components/Footer/Footer";
import ListingDetail from "./components/ListingDetail/ListingDetail";

function App() {
  const [listings, setListings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
  });
  const [selectedListing, setSelectedListing] = useState(null); // To hold selected listing

  useEffect(() => {
    fetch("http://localhost:5000/api/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error("Error fetching listings:", error));
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleListingSelect = (listing) => {
    setSelectedListing(listing);
  };

  return (
    <div>
      <Navbar onCategorySelect={handleCategorySelect} onSearch={handleSearch} />
      {selectedListing ? (
        <ListingDetail listing={selectedListing} />
      ) : (
        <div>
          <Categories selectedCategory={selectedCategory} />
          <ListingGrid
            listings={listings}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            onListingSelect={handleListingSelect} // Pass handler for selecting listing
          />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
