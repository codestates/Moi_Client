import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import List from './list/List';
import { ExperienceItem } from '../../../../../modules/changeField/workExperience/types';

interface WorkExperienceProps {
  addExperience: () => void;
  workExperience: ExperienceItem[];
  addJobDescription: (index: number) => void;
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeJobDescriptionFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteExperienceFields: (index: number) => void;
  onDeleteJobDescFields: (
    experienceIndex: number,
    jobDescIndex: number,
  ) => void;
  onCheckInOffice: (index: number) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  addExperience,
  workExperience,
  addJobDescription,
  changeExperienceFields,
  changeJobDescriptionFields,
  onDeleteExperienceFields,
  onDeleteJobDescFields,
  onCheckInOffice,
}) => {
  const list = workExperience.map((ele, index) => {
    return (
      <List
        key={index}
        stateProperty={ele}
        addJobDescription={addJobDescription}
        index={index}
        desc={ele.desc}
        changeExperienceFields={changeExperienceFields}
        changeJobDescriptionFields={changeJobDescriptionFields}
        onDeleteExperienceFields={onDeleteExperienceFields}
        onDeleteJobDescFields={onDeleteJobDescFields}
        onCheckInOffice={onCheckInOffice}
        workExperience={workExperience}
      />
    );
  });

  return (
    <article className={styles.experience_container__article}>
      <div className={styles.experience_title_block__div}>
        <p className={styles.experience_title__p}>경력</p>
        <p className={styles.experience_sub_title__p}>
          근무했던 회사명과 직무, 근무 기간 및 주요 성과를 기재해주세요 :)
        </p>
      </div>
      <div className={styles.experience_list_block__div}>
        <button onClick={addExperience}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default WorkExperience;
