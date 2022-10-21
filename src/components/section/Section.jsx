import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, sectionType, children }) => {
  return (
    <section className={[styles.section__light]}>
      <h3 className={styles.section_title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
