import React from 'react';
import styles from '../../../../../styles/pages/my_page/resume/resumecard/ResumeCard.module.css';
interface CardProps {
  stateProperty: {
    resumeId: string;
    title: string;
    createdAt: string;
    template: string;
  };
}
const CardItem: React.FC<CardProps> = ({ stateProperty }) => {
  return (
    <div className={styles.card__item} key={stateProperty.resumeId}>
      <div className={styles.card__item__iconContainer}>
        <img className={styles.card__item__icon} src="/moi_basic.png" />
      </div>
      <div className={styles.card__item__textContainer}>
        <h3 className={styles.card__item__title}>{stateProperty.title}</h3>
        <p className={styles.card__item__date}>{stateProperty.createdAt}</p>
      </div>
    </div>
  );
};

export default CardItem;
