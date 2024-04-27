import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__title">
          <div className="footer__contact">
            <h3 className="footer__contact-title">Get in Touch</h3>
            <div className="footer__socials">
              <a href="https://www.instagram.com/ashanksart/" className="footer__socials-link"><img src="./assets/Icons/Icon-instagram.svg" alt="instagram-image"/></a>
              <a href="https://www.facebook.com/ashanks2" className="footer__socials-link"><img src="./assets/Icons/Icon-facebook.svg" alt="facebook-image"/></a>
              <a href="https://www.linkedin.com/in/andrew-shanks-72906888/" className="footer__socials-link"><img src="./assets/Icons/linkedin.png" alt="linkedin-image"/></a>
            </div>
          </div>
          <div className="footer__logo">
            <img className="footer__logo-image" src="assets/Icons/icon-like.svg" alt="logo" />
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info-group">
            <p className="footer__info-text">Vancouver, BC, Canada</p>
            <p className="footer__info-text">andyshanks8@gmail.com</p>
          </div>
        </div>
        <div className="footer__logo">
          <img className="footer__logo-image" alt="logo-image" src="assets/Icons/icon-like.svg" />
        </div>
        <p className="footer__text">Made with love © 2024 All Rights Reserved</p>
      </section>
    </footer>
  );
};

export default Footer;

