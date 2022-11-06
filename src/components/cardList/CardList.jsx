import React from 'react';
import styles from './CardList.module.css';
import Card from '../card/Card';
import { cardData } from '../../data/cardData';

const CardList = () => {
  return (
    <div className={styles.cardList}>
      {cardData.map((item) => (
        <Card
          cardTitle={item.cardTitle}
          job={item.job}
          period={item.period}
          description={item.description}
          key={item.cardTitle}
        />
      ))}
    </div>
  );
};

export default CardList;
