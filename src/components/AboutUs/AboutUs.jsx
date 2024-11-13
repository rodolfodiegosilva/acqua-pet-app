// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us">
      <div className="container">
        <h2>Sobre Nós</h2>
        <div className="content">
          <div className="image">
            <img src="https://example.com/nossa-loja.jpg" alt="Nossa Loja" />
          </div>
          <div className="text">
            <p>
              A <strong>Consultoria Veterinária AcquaPet Store</strong> funciona desde 2017 em Manaus, oferecendo serviços de qualidade para o bem-estar dos seus animais de estimação.
            </p>
            <p>
              Nosso ponto forte são os <strong>peixes ornamentais</strong>, com uma grande variedade de espécies para encantar você. Além disso, contamos com uma equipe de veterinários especializados prontos para atender seu pet.
            </p>
            <p>
              Visite-nos em nossa loja física ou entre em contato para saber mais sobre nossos serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
