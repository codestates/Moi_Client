import React from 'react';
import styles from '../../../../../styles/pages/my_page/resume/resumecard/ResumeCard.module.css';
import { resumecards } from '../../../../../data/my_page/resumecard/data';
import CreateCard from '../../../../../components/pages/my_page/resume/resumecard/createcard/CreateCard';
const ResumeCard: React.FC = () => {
  const resumeCards = resumecards.map((card) => {
    return (
      <div className={styles.card__item} key={card.id}>
        <div className={styles.card__item__iconContainer}>
          <img className={styles.card__item__icon} src={card.img} />
        </div>
        <div className={styles.card__item__textContainer}>
          <h3 className={styles.card__item__title}>{card.title}</h3>
          <p className={styles.card__item__date}>{card.date}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.card__container}>
      <CreateCard />
      {resumeCards}
    </div>
  );
};
export default ResumeCard;
