import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';

const LINK_TEXT = 'Back to top';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright 2022</p>
      <Link to={'navbar'} smooth={true} offset={0} duration={500}>
        {LINK_TEXT}
      </Link>
    </div>
  );
};

export default Footer;
