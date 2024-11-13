import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>Depoimentos</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <blockquote>
              “Excelente atendimento! Meu cachorro adora ir ao Acqua Pet Shop.”
            </blockquote>
            <p>- Ana P.</p>
          </div>
          <div className="testimonial-item">
            <blockquote>
              “Sempre muito cuidadosos e atenciosos com nossos pets.”
            </blockquote>
            <p>- Lucas R.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
