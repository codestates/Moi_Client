import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';
const Skills: React.FC = () => {
  return (
    <article className={styles.skills_container}>
      <div className={styles.skills_title}>기술</div>
      <div className={styles.skills_button}>
        <button>+ 추가</button>
      </div>
    </article>
  );
};

export default Skills;
