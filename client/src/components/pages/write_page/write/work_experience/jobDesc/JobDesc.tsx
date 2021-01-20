import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import { FaTimes } from 'react-icons/fa';

interface JobDescProps {
  experienceIndex: number;
  jobIndex: number;
  description: string;
  changeJobDescriptionFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteJobDescFields: (
    experienceIndex: number,
    jobDescIndex: number,
  ) => void;
}

const JobDesc: React.FC<JobDescProps> = ({
  experienceIndex,
  jobIndex,
  description,
  changeJobDescriptionFields,
  onDeleteJobDescFields,
}) => {
  return (
    <li className={styles.job_desc__list}>
      <div></div>
      <input
        type="text"
        name="description"
        data-experience-index={experienceIndex}
        data-job-index={jobIndex}
        placeholder="주요 성과"
        value={description}
        onChange={changeJobDescriptionFields}
      />
      <button
        className={styles.delete__button}
        onClick={() => onDeleteJobDescFields(experienceIndex, jobIndex)}
      >
        <FaTimes />
      </button>
    </li>
  );
};

export default JobDesc;
