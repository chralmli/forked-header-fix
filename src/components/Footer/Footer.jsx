import React from 'react';
import footer from './footer.module.css'; 

const Footer = () => {
  return (
    <div className={footer.footer}>
      <div className={footer['footer-container']}>
        <p className={footer['footer-copyright']}>
          &copy; 2023 NeNorvalls. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
