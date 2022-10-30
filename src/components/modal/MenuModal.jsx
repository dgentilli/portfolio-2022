import React from 'react';
import styles from './MenuModal.module.css';

const MenuModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_close}>X Close</div>
      <div className={styles.modal_text}>
        <a className={styles.modal_item}>Client Projects</a>
        <a className={styles.modal_item}>Previous Experience</a>
        <a className={styles.modal_item}>Background</a>
        <a className={styles.modal_item}>More Info</a>
      </div>
    </div>
  );
};

export default MenuModal;
