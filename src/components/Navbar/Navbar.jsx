import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>Airbnb</div>
    <ul className={styles.navLinks}>
      <li>Home</li>
      <li>Experiences</li>
      <li>Online Experiences</li>
    </ul>
    <button className={styles.userMenu}>Login / Signup</button>
  </nav>
);

export default Navbar;
