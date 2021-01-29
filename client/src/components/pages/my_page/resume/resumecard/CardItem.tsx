import React from 'react';
import styles from '../../../../../styles/pages/my_page/resume/resumecard/ResumeCard.module.css';
import { Link } from 'react-router-dom';
interface CardProps {
  stateProperty: {
    resumeId: string;
    title: string;
    createdAt: string;
    template: string;
  };
  editRequest: (resumeId: string) => void;
}
const CardItem: React.FC<CardProps> = ({ stateProperty, editRequest }) => {
  return (
    <Link to="/write">
      <div
        className={styles.card__item}
        key={stateProperty.resumeId}
        onClick={() => editRequest(stateProperty.resumeId)}
      >
        <div className={styles.card__item__iconContainer}>
          <img className={styles.card__item__icon} src="/moi_basic.png" />
        </div>
        <div className={styles.card__item__textContainer}>
          <h3 className={styles.card__item__title}>{stateProperty.title}</h3>
          <p className={styles.card__item__date}>{stateProperty.createdAt}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
