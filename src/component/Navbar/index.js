import React, { useState } from 'react';
import './index.css';


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<header className="navbar">
<div className="navbar__container">
<a href="#" className="brand">
<img src="/tandylogo.jpeg" alt="Logo" className="logo" />
</a>


<nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
<ul className="nav__list">
<li className="nav__item"><a href="#Home" className="nav__link">Нүүр хуудас</a></li>
<li className="nav__item"><a href="#about" className="nav__link">Бидний тухай</a></li>
<li className="nav__item"><a href="#services" className="nav__link">Үйл ажилгааны чиглэл</a></li>
<li className="nav__item"><a href="#contact" className="nav__link">Холбоо барих</a></li>
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