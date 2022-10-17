import React from 'react';
import styles from './Header.module.css';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <div className={styles.header_text_wrapper}>
        <h1 className={styles.header_title}>Dave Gentilli</h1>
        <h3 className={styles.header_sub_title}>
          React Native, React, Redux, JavaScript
        </h3>
        <h3 className={styles.header_sub_title}>Independent Contractor</h3>
        <div className={styles.header_image} />
      </div>
    </div>
  );
};

export default Header;