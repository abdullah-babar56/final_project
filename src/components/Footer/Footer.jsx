import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
            <li>Join a free Hosting class</li>
            <li>Find a co-host</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Airbnb</h4>
          <ul>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Airbnb, Inc. · Terms · Sitemap · Privacy · Your Privacy Choices</p>
        <div className="footer-bottom-right">
          <div className="footer-language">
            🌐 English (US) · $ USD
          </div>
          <div className="footer-icons">
            <span>🔗</span> {/* Replace with actual social media icons */}
            <span>🔗</span>
            <span>🔗</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
