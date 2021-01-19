import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import List from './list/List';
import { ExperienceItem } from '../../../../../modules/changeField/workExperience/types';

interface WorkExperienceProps {
  addExperience: () => void;
  workExperience: ExperienceItem[];
  addWork: (index: number) => void;
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  addExperience,
  workExperience,
  addWork,
  changeExperienceFields,
}) => {
  const list = workExperience.map((ele, index) => {
    return (
      <List
        key={index}
        stateProperty={ele}
        addWork={addWork}
        index={index}
        desc={ele.desc}
        changeExperienceFields={changeExperienceFields}
      />
    );
  });

  return (
    <article className={styles.skills_container}>
      <div className={styles.skills_title}>경력</div>
      <div className={styles.skills_button}>
        <button onClick={addExperience}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default WorkExperience;
