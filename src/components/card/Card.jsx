import React from 'react';
import styles from './Card.module.css';

const Card = ({ cardTitle, job, period, description }) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.card_title}>{cardTitle}</h5>
      <p className={styles.card_job}>{job}</p>
      <p className={styles.card_period}>{period}</p>
      <p className={styles.card_text}>{description}</p>
    </div>
  );
};

export default Card;
