import React from 'react';
import { FcDocument } from 'react-icons/fc';
import styles from '../../../styles/pages/my_page/resume/Resume.module.css';
import { GrTrash } from 'react-icons/gr';
import ResumeCardBlur from './ResumeCardBlur';

interface ResumeCardProps {
  resume: {
    resumeId: string;
    title: string;
    createdAt: string;
    template: string;
  };
  editRequest: (resumeId: string) => void;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  handleMouseLeave: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  onDeleteResume: (resumeId: string) => void;
  currentIndex: number;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  resume,
  editRequest,
  handleMouseEnter,
  handleMouseLeave,
  onDeleteResume,
  currentIndex,
}) => {
  const test = false;
  const createdDate = resume.createdAt.split(' ')[0];
  return (
    <>
      <div
        className={styles.resume__card__block}
        onMouseEnter={(event) => handleMouseEnter(event)}
        onMouseLeave={(event) => handleMouseLeave(event)}
        data-index={currentIndex}
        onClick={() => editRequest(resume.resumeId)}
      >
        <div className={styles.resume__icon}>
          <FcDocument />
        </div>
        <div className={styles.resume__info__block}>
          <p>{resume.title}</p>
          <span>{createdDate}</span>
        </div>
      </div>
      <GrTrash onClick={() => onDeleteResume(resume.resumeId)} />
    </>
  );
};

export default ResumeCard;
