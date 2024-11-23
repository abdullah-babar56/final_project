import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Categories from "./components/Categories/Categories";
import ListingGrid from './components/ListingGrid/ListingGrid';
import Footer from "./components/Footer/Footer";

function App() {
  // State to manage the selected category and search query
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
  });

  // Function to handle category selection from Navbar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Function to handle search input data from SearchBar
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onCategorySelect={handleCategorySelect} onSearch={handleSearch} />
      <Categories selectedCategory={selectedCategory} />
      <ListingGrid selectedCategory={selectedCategory} searchQuery={searchQuery} />
      <Footer />
    </div>
  );
}

export default App;
