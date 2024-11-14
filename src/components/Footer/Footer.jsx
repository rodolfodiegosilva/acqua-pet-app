// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const whatsappNumber = '5592991021312';

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <h3>Nosso Endereço</h3>
          <div className="map-container">
            <iframe
              title="Localização AcquaPet Store"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9020639761634!2d-60.03171382545049!3d-3.120600996854909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c0ff4d6db1331%3A0xc6ae3bd7e1e8d1f1!2sR.%20da%20Legi%C3%A3o%2C%2054%20-%20Pres.%20Vargas%2C%20Manaus%20-%20AM%2C%2069025-170!5e0!3m2!1spt-BR!2sbr!4v1731610580106!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="footer-right">
          <h3>AcquaPet Store</h3>
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p>Endereço: Rua da Legião, número 54, Manaus - AM</p>
          <div className="social-media">
            <a
              href="https://x.com/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/acquapet.am?igsh=cW13aHg3cXZ2N282"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
