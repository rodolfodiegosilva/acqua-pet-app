import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <h2>Contato</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
