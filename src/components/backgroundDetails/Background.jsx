import React from 'react';
import styles from './Background.module.css';

import { bioData } from '../../data/biodata';

const Background = () => {
  return (
    <div className={styles.background_container}>
      <p className={styles.background_paragraph}>{bioData.background}</p>
      <p className={styles.background_paragraph}>{bioData.career}</p>
      <p className={styles.background_paragraph}>{bioData.hobbies}</p>
    </div>
  );
};

export default Background;
