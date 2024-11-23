import React from "react";
import "./Categories.css";

const Categories = () => {
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

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <div className="category-icon">{category.icon}</div>
          <div className="category-label">{category.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
