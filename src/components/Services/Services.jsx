// src/components/Services/Services.jsx
import React, { useState } from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Banho e Tosa',
    emoji: '🐶',
    description: 'Serviços de banho e tosa com profissionais qualificados.',
  },
  {
    title: 'Consultoria Veterinária',
    emoji: '🩺',
    description: 'Consultorias e cuidados especializados para a saúde do seu animal.',
  },
  {
    title: 'Peixes Ornamentais',
    emoji: '🐠',
    description: 'Variedade de espécies de peixes ornamentais para aquaristas.',
  },
  {
    title: 'Pet Shop Completo',
    emoji: '🛒',
    description: 'Tudo o que você precisa para o seu pet em um só lugar.',
  },
];

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalOpen(false);
  };

  return (
    <section id="services" className="services">
      <div className="service-container">
        <h2>Nossos Serviços</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-item"
              onClick={() => openModal(service)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => { if (e.key === 'Enter') openModal(service); }}
              aria-label={`Mais informações sobre ${service.title}`}
            >
              <span role="img" aria-label={service.title}>{service.emoji}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {modalOpen && selectedService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedService.title}</h2>
              <p>{selectedService.description}</p>
              <button className="close-button" onClick={closeModal}>Fechar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
