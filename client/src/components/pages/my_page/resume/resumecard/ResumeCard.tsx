import React from 'react';
import styles from '../../../../../styles/pages/my_page/resume/resumecard/ResumeCard.module.css';
import { ResumeData } from '../../../../../modules/get_mypage/types';
import CardItem from './CardItem';
interface ResumeCardProps {
  list: ResumeData[];
  editRequest: (resumeId: string) => void;
}
const ResumeCard: React.FC<ResumeCardProps> = ({ list, editRequest }) => {
  const resumeCards = list.map((card, index) => {
    return (
      <CardItem stateProperty={card} key={index} editRequest={editRequest} />
    );
  });

  return (
    <div className={styles.card__container}>
      <ul className={styles.card_list__ul}>{resumeCards}</ul>
    </div>
  );
};
export default ResumeCard;
