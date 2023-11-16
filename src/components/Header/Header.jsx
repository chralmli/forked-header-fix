import React, { useState } from 'react';
import header from './header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className={header.header}>
      <nav className={header.nav}>
        <div className={header.container}>
          <a href="/" className={header.brand}>
            NeNorvalls
          </a>

          <div className={header.hamburger} onClick={toggleMenu}>
            {/* Improved hamburger icon using semantic HTML */}
            <div className={header.hamburgerLine}></div>
            <div className={header.hamburgerLine}></div>
            <div className={header.hamburgerLine}></div>
          </div>

          <ul className={`${header.ul} ${isMenuOpen ? header.showMenu : ''}`}>
            {/* Navigation links with improved styling */}
            <li className={header.li}>
              <a href="/" className={header.link}>
                Home
              </a>
            </li>
            <li className={header.li}>
              <a href="/projects" className={header.link}>
                Projects
              </a>
            </li>
            <li className={header.li}>
              <a href="/#" className={header.link}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
