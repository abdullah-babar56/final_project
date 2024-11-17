import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Airbnb</div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/experiences">Experiences</a>
        <a href="/online-experiences">Online Experiences</a>
      </div>
      <div className="navbar-user-menu">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
