import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';

interface JobDescProps {
  index: number;
  description: string;
}

const JobDesc: React.FC<JobDescProps> = ({ index, description }) => {
  return (
    <li className={styles.job_desc__list}>
      <div></div>
      <input type="text" name="" id="" placeholder="주요 성과" />
    </li>
  );
};

export default JobDesc;
