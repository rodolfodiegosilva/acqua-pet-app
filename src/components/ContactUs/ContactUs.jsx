// src/components/ContactUs/ContactUs.jsx
import React, { useRef } from 'react';
import axios from 'axios';
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

  };

  const sendWhatsAppMessage = async () => {
    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const phone = formData.get('user_phone');
    const message = formData.get('message');

    // Logs para depuração
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
    console.log('Mensagem:', message);

    const instanceId = 'instance99586'; // Substitua pelo seu Instance ID
    const token = '9mkw3zkl7cc6zcgn'; // Substitua pelo seu Token
    const url = `https://api.ultramsg.com/${instanceId}/messages/chat`;

    const data = {
      token,
      to: '5592981553139', // Substitua pelo número de telefone do destinatário no formato internacional
      body: `Você recebeu uma mensagem de um cliente em potencial.\n\nMensagem: ${message}\n\nContato do cliente em potencial:\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`
    };

    try {
      const response = await axios.post(url, data);
      if (response.data.sent) {
        console.log('Mensagem enviada com sucesso via WhatsApp!');
        alert('Mensagem enviada com sucesso!');
      } else {
        console.log('Falha ao enviar a mensagem via WhatsApp.');
        alert('Falha ao enviar a mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem via WhatsApp:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    //   sendEmail(e);
    sendWhatsAppMessage();
    e.target.reset(); // Limpa o formulário após o envio
  };
  return (
    <section id="contact" className="contact-us">
      <div className="container">
        <h2>Fale Conosco</h2>
        <p>Entre em contato conosco para mais informações ou agendar um atendimento.</p>
        <form ref={form} onSubmit={handleSubmit}>
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