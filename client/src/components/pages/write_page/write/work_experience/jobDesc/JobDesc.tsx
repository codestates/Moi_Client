import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import { FaRegTrashAlt } from 'react-icons/fa';

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
    <li className={styles.experience_job_desc_list__li}>
      <div></div>
      <input
        type="text"
        name="description"
        data-experience-index={experienceIndex}
        data-job-index={jobIndex}
        placeholder="주요 성과를 입력해주세요."
        value={description}
        onChange={changeJobDescriptionFields}
      />
      <button
        className={styles.experience_job_desc_list_delete__button}
        onClick={() => onDeleteJobDescFields(experienceIndex, jobIndex)}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default JobDesc;
