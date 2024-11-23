import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";  // Import the SearchBar component
import Categories from "../Categories/Categories";  // Import the Categories component

const Navbar = ({ onCategorySelect, onSearch }) => {
  const handleCategoryChange = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="navbar">
      {/* Top section */}
      <div className="navbar__top">
        {/* Logo */}
        <div className="navbar__logo">
          <img
            src="https://seeklogo.com/images/A/airbnb-logo-6F2A32E37D-seeklogo.com.png"
            alt="Airbnb Logo"
          />
        </div>

        {/* Middle section */}
        <div className="navbar__center">
          <button className="navbar__button">Stays</button>
          <button className="navbar__button">Experiences</button>
        </div>

        {/* Right section */}
        <div className="navbar__right">
          <button className="navbar__link">Airbnb Your Home</button>
          <div className="navbar__icon">🌐</div>
          <button className="navbar__profile">Profile</button>
        </div>
      </div>

      {/* Search bar */}
      <div className="navbar__search">
        <Categories onCategorySelect={handleCategoryChange} /> {/* Pass the function to update category */}
        <SearchBar onSearch={onSearch} /> {/* Pass the search function */}
      </div>
    </div>
  );
};

export default Navbar;
