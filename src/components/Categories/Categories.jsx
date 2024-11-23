import React, { useState } from "react";
import "./Categories.css";

const Categories = ({ onCategorySelect }) => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("Rooms");

  const categories = [
    { icon: "🏠", label: "Rooms" },
    { icon: "🌄", label: "Amazing views" },
    { icon: "🏝️", label: "Tropical" },
    { icon: "🏞️", label: "Lake" },
    { icon: "🏙️", label: "Top cities" },
    { icon: "🏰", label: "Mansions" },
    { icon: "🏠", label: "Tiny homes" },
    { icon: "🔥", label: "Trending" },
  ];

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category); // Update the active category in local state
    onCategorySelect(category);   // Pass selected category to the parent component
  };

  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          key={category.label}
          className={`category-item ${category.label === activeCategory ? "active" : ""}`}
          onClick={() => handleCategoryChange(category.label)} // Update on click
        >
          <div className="category-icon">{category.icon}</div>
          <div className="category-label">{category.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
