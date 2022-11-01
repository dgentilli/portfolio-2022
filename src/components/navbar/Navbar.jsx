import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ setIsOpen }) => {
  return (
    <div id='navbar' className={styles.nav_bar}>
      <div onClick={() => setIsOpen(true)} className={styles.nav_bar_home}>
        {'<Menu />'}
      </div>
    </div>
  );
};

export default Navbar;
