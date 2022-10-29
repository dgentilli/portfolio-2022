import React from 'react';
import styles from './Info.module.css';

const Info = () => {
  return (
    <div className={styles.info_container}>
      <p className={styles.info_text}>
        For more info about please see my media accounts. Reach out to me on
        LinkedIn or at dgentilli@gmail.com.
      </p>
      <div className={styles.info_icon_container}>
        <div className={styles.info_linkedIn} />
        <div className={styles.info_gitHub} />
        <div className={styles.info_twitter} />
      </div>
    </div>
  );
};

export default Info;
