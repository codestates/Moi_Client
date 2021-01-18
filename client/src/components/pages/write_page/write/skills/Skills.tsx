import React, { useState } from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';
import List from './list/List';
interface SkillProps {
  addSkill: () => void;
}
const Skills: React.FC<SkillProps> = ({ addSkill }) => {
  const [listAdd, setListAdd] = useState<boolean>(false);
  const onListAdd = (): void => {
    addSkill();
    setListAdd(!listAdd);
  };

  return (
    <article className={styles.skills_container}>
      <div className={styles.skills_title}>기술</div>
      <div className={styles.skills_button}>
        <button onClick={onListAdd}>+ 추가</button>
      </div>
      {listAdd ? <List /> : null}
    </article>
  );
};

export default Skills;
