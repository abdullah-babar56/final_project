import React, { useState } from 'react';
import './Categories.css';

const categories = ['Beachfront', 'Cabins', 'Trending', 'Luxury', 'City'];

const Categories = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={activeCategory === category ? 'active' : ''}
          onClick={() => {
            setActiveCategory(category);
            onCategorySelect(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
