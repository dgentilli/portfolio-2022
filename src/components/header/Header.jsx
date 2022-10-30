import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div id='header' className={styles.header}>
      <div className={styles.header_text_wrapper}>
        <h1 className={styles.header_title}>Dave Gentilli</h1>
        <h3 className={styles.header_sub_title}>
          JS Developer - React Native & React
        </h3>
        <h3 className={styles.header_sub_title}>Independent Contractor</h3>
        <div className={styles.header_image} />
      </div>
    </div>
  );
};

export default Header;
