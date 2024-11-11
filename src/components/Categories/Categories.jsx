import React, { useContext } from 'react';
import styles from './Categories.module.css';
import { CategoryContext } from '../../context/CategoryContext';

const categories = ['Beachfront', 'Cabins', 'Trending'];

const Categories = () => {
  const { activeCategory, setActiveCategory } = useContext(CategoryContext);

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <button 
          key={category} 
          className={activeCategory === category ? styles.active : ''} 
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
