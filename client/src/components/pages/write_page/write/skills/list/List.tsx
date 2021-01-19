import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/Write.module.css';

interface ListProps {
  skill: string;
  desc: string;
  index: number;
  onChangeSkillFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteSkillFields: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  skill,
  desc,
  index,
  onChangeSkillFields,
  onDeleteSkillFields,
}) => {
  return (
    <div className={styles.skills_listContainer}>
      <ul className={styles.skills_list}>
        <li className={styles.skills_list_item}>
          <form className={styles.skills_formName}>
            <input
              className={styles.inputName}
              type="text"
              name="skill"
              placeholder="기술명"
              data-index={index}
              value={skill}
              onChange={onChangeSkillFields}
            />
          </form>
          <form className={styles.skills_formDesc}>
            <input
              className={styles.inputDesc}
              type="text"
              name="desc"
              placeholder="세부사항"
              data-index={index}
              value={desc}
              onChange={onChangeSkillFields}
            />
          </form>
          <button
            className={styles.skills_list_button}
            onClick={() => onDeleteSkillFields(index)}
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
