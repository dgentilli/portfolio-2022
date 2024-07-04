import React from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';

const LINK_TEXT = 'Back to top';
const COPYRIGHT_TEXT = 'Copyright 2022';
const SVG_CREDIT_TEXT = 'SVG credit: undraw.co';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link to={'navbar'} smooth={true} offset={0} duration={500}>
        {LINK_TEXT}
      </Link>
      <p>{SVG_CREDIT_TEXT}</p>
      <p>{COPYRIGHT_TEXT}</p>
    </div>
  );
};

export default Footer;
