import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import instagramIcon from "../../assets/Icons/Icon-instagram.svg";
import facebookIcon from "../../assets/Icons/Icon-facebook.svg";



export default function Footer () {
  return (
    <>
    <footer className="footer">
      <section className="footer__container">
        <div className="footer__title">
          <div className="footer__contact">
            <h3 className="footer__contact-title">Get in Touch</h3>
            <div className="footer__socials">
              <a href="https://www.instagram.com/ashanksart/" target="_blank" rel="noopener noreferrer" className="footer__socials-link">
                <img src={instagramIcon} alt="instagram-image"/>
              </a>
              <a href="https://www.facebook.com/ashanks2" target="_blank" rel="noopener noreferrer" className="footer__socials-link">
                <img src={facebookIcon} alt="facebook-image"/>
              </a>
            </div>
          </div>
          
        </div>
        <div className="footer__info">
          <div className="footer__info-group">
            <p className="footer__info-text">Vancouver, BC, Canada</p>
            
          </div>
        </div>
        <li className="navigation__list-item">
            <Link className="navigation__list-item-link navigation__list-item-link--admin" to="/adminlogin">
              Admin
            </Link>
          </li>
        <p className="footer__text">Made with love © 2024 All Rights Reserved</p>
      </section>
    </footer>
    </>
  );
};



