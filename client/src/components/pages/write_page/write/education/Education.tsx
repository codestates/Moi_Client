import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/education/Education.module.css';
import { EducationItem } from '../../../../../modules/changeField/education/types';
import List from './list/List';

interface EducationProps {
  addEducation: () => void;
  educations: EducationItem[];
  onChangeEducationFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEducationFields: (index: number) => void;
}

const Education: React.FC<EducationProps> = ({
  addEducation,
  educations,
  onChangeEducationFields,
  onDeleteEducationFields,
}) => {
  const list = educations.map((ele, index) => {
    return (
      <List
        key={index}
        eduTitle={ele.eduTitle}
        eduDesc={ele.eduDesc}
        index={index}
        onChangeEducationFields={onChangeEducationFields}
        onDeleteEducationFields={onDeleteEducationFields}
      />
    );
  });
  return (
    <article className={styles.education_container}>
      <div className={styles.education_title}>학력</div>
      <div className={styles.education_button}>
        <button onClick={addEducation}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default Education;
