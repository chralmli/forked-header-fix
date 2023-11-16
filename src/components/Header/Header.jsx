import React, { useState } from 'react';
import styles from './header.module.css';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>NeNorvalls</div>
      <div className={styles.nav}>
 
        <div className={`${styles.menuIcon} ${showNav ? styles.close : ''}`} onClick={toggleNav}>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
          <div className={styles.hamburgerLine}></div>
        </div>
        
        <nav className={`${styles.navItems} ${showNav ? styles.show : ''}`}>
          <a href="/">Home</a>
          <a href="/projects">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
