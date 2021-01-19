import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import { FaTimes } from 'react-icons/fa';

interface ListProps {
  companyName: string;
  addWork: (index: number) => void;
  index: number;
}

const List: React.FC<ListProps> = ({ companyName, addWork, index }) => {
  return (
    <div className={styles.skills_listContainer}>
      <ul>
        <li>
          <div className={styles.workExperience__period__container}>
            <div className={styles.workExperience__period__block}>
              <input
                type="text"
                className={styles.workExperience__period__input}
                placeholder="YYYY.MM"
              />
              <span>~</span>
              <input
                type="text"
                className={styles.workExperience__period__input}
                placeholder="YYYY.MM"
              />
            </div>
            <div className={styles.workExperience__period__in_office}>
              <input type="checkbox" />
              <strong> 현재 재직중</strong>
            </div>
          </div>

          <div>
            <form className={styles.skills__form}>
              <input
                type="text"
                name="skill"
                placeholder="회사명"
                value={companyName}
              />
            </form>
            <form className={styles.skills__form_Desc}>
              <input type="text" name="desc" placeholder="직무명" />
            </form>
            <div>
              <button
                onClick={() => addWork(index)}
                className={styles.add_work__button}
              >
                + 주요 성과 추가
              </button>
            </div>
          </div>
          <button className={styles.delete__button}>
            <FaTimes />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
