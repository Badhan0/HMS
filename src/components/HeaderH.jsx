// src/components/Header.jsx
import React from 'react';

const Header = () => (
    <header className="header-container">
    <div className="logo-container">
      <img src="/Images/LOGO.png" alt="Apollo Hospital Logo" className="logo-image" />
      <span className="hospital-name">SANDHYA NURSING HOME & DIAGNOSTIC CENTRE</span>
    </div>
    <div className="button-container">
      <a href="tel:1066" className="header-button header-button-emergency">
        Emergency (1066)
      </a>
      <a href="tel:18605001066" className="header-button header-button-lifeline">
        LIFELINE (1860500 1066)
      </a>
    </div>
  </header>
);

export default Header;
