import React from 'react';
import { HiDocumentAdd } from 'react-icons/hi';
import styles from '../../../styles/pages/my_page/resume/ResumeAddCard.module.css';

const ResumeAddCard: () => JSX.Element = () => {
  return (
    <div className={styles.card__content}>
      <HiDocumentAdd className={styles.plus__icon} />
      <p>이력서 작성하기</p>
    </div>
  );
};

export default ResumeAddCard;
