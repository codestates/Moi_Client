import React from 'react';
import { SkillItem } from '../../../../../modules/changeField/skills/types';
import List from './list/List';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';

interface SkillProps {
  addSkill: () => void;
  skills: SkillItem[];
  onChangeSkillFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteSkillFields: (index: number) => void;
}

const Skills: React.FC<SkillProps> = ({
  addSkill,
  skills,
  onChangeSkillFields,
  onDeleteSkillFields,
}) => {
  const list = skills.map((ele, index) => {
    return (
      <List
        key={index}
        skill={ele.skill}
        desc={ele.desc}
        index={index}
        onChangeSkillFields={onChangeSkillFields}
        onDeleteSkillFields={onDeleteSkillFields}
      />
    );
  });

  return (
    <article className={styles.skills_container}>
      <div className={styles.skills_title__block}>
        <p className={styles.skills_title__p}>기술</p>
        <p className={styles.skills_sub_title__p}>
          기술명과 해당 기술에 대한 상세 설명을 기재해주세요 :)
        </p>
      </div>
      <div className={styles.skills_list__block}>
        <button onClick={addSkill}>+ 추가</button>
        {list}
      </div>
    </article>
  );
};

export default Skills;
