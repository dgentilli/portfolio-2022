import React from 'react';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <h5 className={styles.card_title}>Salt & Pepper</h5>
      <p className={styles.card_job}>React Native</p>
      <p className={styles.card_period}>04/2022 - Present</p>
      <p className={styles.card_text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi autem sed
        ea dolores error, voluptates eveniet, officia voluptatum quaerat vel
        fuga omnis debitis labore. Atque sequi dicta reiciendis rerum aliquam.
      </p>
    </div>
  );
};

export default Card;
