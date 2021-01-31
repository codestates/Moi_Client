import React from 'react';
import styles from '../../../styles/pages/my_page/resume/Resume.module.css';
import { GrTrash } from 'react-icons/gr';

interface ResumeCardProps {
  resume: {
    resumeId: string;
    title: string;
    createdAt: string;
    template: string;
  };
  editRequest: (resumeId: string) => void;
  onDeleteResume: (resumeId: string) => void;
  onDeleteResumeModal: (resumeId: string, title: string) => void;
  currentIndex: number;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  resume,
  editRequest,
  onDeleteResumeModal,
  currentIndex,
}) => {
  const createdDate = resume.createdAt.split(' ')[0];
  return (
    <div className={styles.resume__card__block} data-index={currentIndex}>
      <div
        className={styles.resume__info__block}
        onClick={() => editRequest(resume.resumeId)}
      >
        <p>{resume.title}</p>
        <span>{createdDate}</span>
      </div>
      <div className={styles.resume__remove__block}>
        <GrTrash
          className={styles.resume__remove__button}
          onClick={() => onDeleteResumeModal(resume.resumeId, resume.title)}
        />
      </div>
    </div>
  );
};

export default ResumeCard;
