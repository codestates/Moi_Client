import React from 'react';
import styles from '../../../../styles/pages/my_page/resume/Resume.module.css';
import ResumeCard from './resumecard/ResumeCard';
const Resume: React.FC = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <ResumeCard />
      </div>
    </section>
  );
};

export default Resume;
