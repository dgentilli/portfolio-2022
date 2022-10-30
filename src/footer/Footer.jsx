import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright 2022</p>
      <a href='#navbar'>Back to top</a>
    </div>
  );
};

export default Footer;
