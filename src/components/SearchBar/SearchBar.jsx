import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchInputs, setSearchInputs] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(searchInputs); // Pass search data to parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        name="location"
        placeholder="Where"
        value={searchInputs.location}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="checkIn"
        value={searchInputs.checkIn}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="checkOut"
        value={searchInputs.checkOut}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
