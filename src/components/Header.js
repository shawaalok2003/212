import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">212 Degrees</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#success">Success Stories</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href="#contact" className="cta-button">Get Started</a>
    </header>
  );
};

export default Header;