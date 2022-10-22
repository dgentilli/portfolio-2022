import React, { useMemo } from 'react';
import styles from './Section.module.css';

import { sectionTypes } from '../../enums';

const Section = ({ title, sectionType, children }) => {
  const colorScheme = useMemo(() => {
    return sectionType === sectionTypes.LIGHT
      ? styles.section__light
      : styles.section__dark;
  }, [sectionType]);

  return (
    <section className={colorScheme}>
      <h3 className={styles.section_title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
