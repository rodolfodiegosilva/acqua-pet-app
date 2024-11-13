import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AcquaPet Store. Todos os direitos reservados.</p>
        <p>Endereço: Rua da Legião, número 54, Manaus - AM</p>
      </div>
    </footer>
  );
};

export default Footer;
