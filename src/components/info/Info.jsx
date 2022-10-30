import React from 'react';
import styles from './Info.module.css';

const Info = () => {
  return (
    <div className={styles.info_container}>
      <p className={styles.info_text}>
        For more info please see my social media accounts. Reach out to me on
        LinkedIn or at dgentilli@gmail.com.
      </p>
      <div className={styles.info_icon_container}>
        <a
          className={styles.info_linkedIn}
          href='https://ro.linkedin.com/in/dave-gentilli-97925892'
        ></a>
        <a
          className={styles.info_gitHub}
          href='https://github.com/dgentilli'
        ></a>
        <a
          className={styles.info_twitter}
          href='https://twitter.com/dave_gentilli'
        ></a>
      </div>
    </div>
  );
};

export default Info;
