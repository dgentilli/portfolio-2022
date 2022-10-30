import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div id='navbar' className={styles.nav_bar}>
      <div className={styles.nav_bar_home}>Home</div>
    </div>
  );
};

export default Navbar;
