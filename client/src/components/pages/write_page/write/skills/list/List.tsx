import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/Write.module.css';
const List: React.FC = () => {
  return (
    <div className={styles.skills_listContainer}>
      <ul className={styles.skills_list}>
        <li className={styles.skills_list_item}>
          <form className={styles.skills_formName}>
            <input
              className={styles.inputName}
              type="text"
              name="기술이름"
              placeholder="기술명"
            />
          </form>
          <form className={styles.skills_formDesc}>
            <input
              className={styles.inputDesc}
              type="text"
              name="기술설명"
              placeholder="세부사항"
            />
          </form>
          <button className={styles.skills_list_button}>
            + 주요 기술 추가
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
