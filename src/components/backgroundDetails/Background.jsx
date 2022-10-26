import React from 'react';
import styles from './Background.module.css';

import { bioData } from '../../data/biodata';

const Background = () => {
  return (
    <div className={styles.background_container}>
      <div>
        <div className={styles.paragraph_icon_life} />
        <p className={styles.background_paragraph}>{bioData.background}</p>
      </div>
      <div>
        <div className={styles.paragraph_icon_career} />
        <p className={styles.background_paragraph}>{bioData.career}</p>
      </div>
      <div>
        <div className={styles.paragraph_icon_hobbies} />
        <p className={styles.background_paragraph}>{bioData.hobbies}</p>
      </div>
    </div>
  );
};

export default Background;
