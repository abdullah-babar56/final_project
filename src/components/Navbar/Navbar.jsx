
import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
        <div className="navbar__searchItem">Where</div>
        <div className="navbar__searchItem">Check-in</div>
        <div className="navbar__searchItem">Check-out</div>
        <div className="navbar__searchItem">Who</div>
        <button className="navbar__searchButton">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
