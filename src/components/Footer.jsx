import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='footer-logo'>
          <span className='footer-logo-text'>BoccYD</span>
        </div>
      </div>

      <p className='footer-description'>
        Aqui voce encontra o seu carro eletrico
      </p>

      <div className='footer-social-icons'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaFacebook />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaInstagram />
        </a>
        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='footer-icon'>
          <FaLinkedin />
        </a>
        <a href='mailto:contado@boccyd.com' className='footer-icon'>
          <FaEnvelope />
        </a>
      </div>


      <h4 className='footer-rights'> BoccYD©2024. Todos os direitos reservados.</h4>
    </footer>
  );
}

export default Footer;
