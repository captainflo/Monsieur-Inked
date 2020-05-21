import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-copyright">
        <div className="container">
          © 2020 Monsieur Inked
          <a
            style={{ color: '#d4af37' }}
            className="right"
            href="https://www.instagram.com/floweb_us/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
