import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#" className="brand">
          <img src="/logoo.png" alt="Logo" className="logo" />
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Primary">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link">Нүүр хуудас</Link>
            </li>
            <li className="nav__item">
              <Link to="/About" className="nav__link">Бидний тухай</Link>
            </li>
            <li className="nav__item">
              <Link to="/Services" className="nav__link">Үйл ажилгааны чиглэл</Link>
            </li>
             <li className="nav__item">
              <Link to="/Contact" className="nav__link">Холбоо барих</Link>
            </li>
          </ul>
        </nav>

        <button
          className={`hamburger ${open ? 'is-active' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </button>
      </div>
    </header>
  );
}
