import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          <div className="service-item">
            <span role="img" aria-label="Banho e Tosa">🐶</span>
            <h3>Banho e Tosa</h3>
            <p>Profissionais especializados para cuidar da higiene do seu pet.</p>
          </div>
          <div className="service-item">
            <span role="img" aria-label="Consultoria Veterinária">🩺</span>
            <h3>Consultoria Veterinária</h3>
            <p>Atendimento veterinário de qualidade para a saúde do seu animal.</p>
          </div>
          <div className="service-item">
            <span role="img" aria-label="Peixes Ornamentais">🐠</span>
            <h3>Peixes Ornamentais</h3>
            <p>Grande variedade de espécies para os amantes de aquarismo.</p>
          </div>
          <div className="service-item">
            <span role="img" aria-label="Pet Shop Completo">🛒</span>
            <h3>Pet Shop Completo</h3>
            <p>Tudo o que você precisa em um só lugar.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
