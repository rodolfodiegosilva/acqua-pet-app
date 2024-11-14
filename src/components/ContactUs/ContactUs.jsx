// src/components/ContactUs/ContactUs.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_oldaaa8',  // substitua pelo seu Service ID
        'template_tql5ocf', // substitua pelo Template ID
        form.current,
        { publicKey: 'L9aDXNEBObZquViMR' } // substitua pelo Public Key
      )
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Ocorreu um erro ao enviar a mensagem, tente novamente.");
        }
      );
      
    e.target.reset(); // limpa o formulário após o envio
  };

  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <h2>Fale Conosco</h2>
        <p>Entre em contato conosco para mais informações ou agendar um atendimento.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="user_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" name="user_phone" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
