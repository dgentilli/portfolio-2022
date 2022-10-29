import React, { useMemo } from 'react';
import styles from './Section.module.css';

import { sectionTypes } from '../../enums';

const Section = ({ title, sectionType, children }) => {
  const colorScheme = useMemo(() => {
    if (sectionType === sectionTypes.LIGHT) return styles.section__light;
    if (sectionType === sectionTypes.DARK) return styles.section__dark;
    return styles.section__gradient;
  }, [sectionType]);

  return (
    <section className={colorScheme}>
      <h3 className={styles.section_title}>{title}</h3>
      {children}
    </section>
  );
};

export default Section;
