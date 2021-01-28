import React from 'react';
import styles from '../../../../styles/pages/my_page/resume/Resume.module.css';
import ResumeCard from './resumecard/ResumeCard';

import { ResumeData } from '../../../../modules/get_mypage/types';
interface ResumeProps {
  list: ResumeData[];
}
const Resume: React.FC<ResumeProps> = ({ list }) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <ResumeCard list={list} />
      </div>
    </section>
  );
};

export default Resume;
