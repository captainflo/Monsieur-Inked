import React from 'react';
import '../App.css';

class Footer extends React.Component {
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
            href="https://www.instagram.com/mrinked/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <audio controls ref="audio">
            <source
              src={process.env.PUBLIC_URL + '/images/sound.mp3'}
              autoPlay
            />
          </audio>
        </div>
      </div>
    );
  }
}

export default Footer;
