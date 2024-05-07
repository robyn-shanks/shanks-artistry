import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logoIcon from '../../assets/Images/andy.jpg';

export default function Header() {
  return (
    <header>
      <nav className="navigation">
        <div className="navigation__logo">
          <Link to="/" className="navigation__logo-link">
            <img className="navigation__logo-image" src={logoIcon} alt="logo-image" />
          </Link>
        </div>
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link className="navigation__list-item-link navigation__list-item-link--gallery" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__list-item-link navigation__list-item-link--products" to="/products">
              Products
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link className="navigation__list-item-link navigation__list-item-link--contact" to="/contact">
              Contact
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
};


