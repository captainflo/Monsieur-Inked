import React from 'react';
import '../App.css';

class Footer extends React.Component {
  state = {
    play: false,
  };

  render() {
    return (
      <div className="footer-copyright">
        <div className="footer-wrapper">
          © 2020 Monsieur Inked
          <a style={{ color: '#d4af37' }} href="tel:1-678-642-9863">
            <i className="fas fa-phone-square"></i> 678-642-9863
          </a>
          <a
            style={{ color: '#d4af37' }}
            href="https://www.instagram.com/floweb_us/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <audio controls ref="audio" autoPlay>
            <source src="https://res.cloudinary.com/monsieur-inked/video/upload/v1590087962/ON_DECK__The_Geek_x_VRV_eshsfd.mp3" />
          </audio>
        </div>
      </div>
    );
  }
}

export default Footer;
