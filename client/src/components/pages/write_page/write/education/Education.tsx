import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/education/Education.module.css';
import { EducationItem } from '../../../../../modules/changeField/education/types';
import List from './list/List';

interface EducationProps {
  addEducation: () => void;
  educations: EducationItem[];
  onChangeEducationFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEducationFields: (index: number) => void;
  onToggleEduDropdown: (index: number) => void;
}

const Education: React.FC<EducationProps> = ({
  addEducation,
  educations,
  onChangeEducationFields,
  onDeleteEducationFields,
  onToggleEduDropdown,
}) => {
  const list = educations.map((ele, index) => {
    return (
      <List
        key={index}
        stateProperty={ele}
        index={index}
        onChangeEducationFields={onChangeEducationFields}
        onDeleteEducationFields={onDeleteEducationFields}
        onToggleEduDropdown={onToggleEduDropdown}
      />
    );
  });
  return (
    <article className={styles.education_container__article}>
      <div>
        <p className={styles.education_title__p}>학력 및 교육 이수</p>
        <p className={styles.education_sub_title__p}>
          학력 및 교육 이수를 기재해주세요 :)
        </p>
      </div>
      <div className={styles.education_list_block__div}>
        <button onClick={addEducation}>+ 추가</button>
      </div>
      {list}
    </article>
  );
};

export default Education;
