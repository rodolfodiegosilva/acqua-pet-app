// src/components/Header/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            src="https://my-portifolio-images.s3.us-east-2.amazonaws.com/logo_header.png"
            alt="AcquaPet Store Logo"
          />
          <h1>AcquaPet Store</h1>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#fish">Peixes</a></li>
            <li><a href="#testimonials">Depoimentos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
