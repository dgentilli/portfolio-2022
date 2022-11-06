import React from 'react';
import classNames from 'classnames';
import styles from './Background.module.css';

import { bioData } from '../../data/biodata';

const Background = () => {
  return (
    <div className={styles.background_container}>
      <div className={styles.background_para_wrapper}>
        <div className={classNames(styles.icon, styles.paragraph_icon_life)} />
        <p className={styles.background_paragraph}>{bioData.background}</p>
      </div>
      <div className={styles.background_para_wrapper}>
        <div
          className={classNames(styles.icon, styles.paragraph_icon_career)}
        />
        <p className={styles.background_paragraph}>{bioData.career}</p>
      </div>
      <div className={styles.background_para_wrapper}>
        <div
          className={classNames(styles.icon, styles.paragraph_icon_hobbies)}
        />
        <p className={styles.background_paragraph}>{bioData.hobbies}</p>
      </div>
    </div>
  );
};

export default Background;
