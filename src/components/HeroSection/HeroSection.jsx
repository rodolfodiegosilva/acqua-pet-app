import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1>Bem-vindo à AcquaPet Store</h1>
          <p>Desde 2017, cuidando do bem-estar dos seus animais de estimação.</p>
          <a href="#services" className="btn">Conheça nossos serviços</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
