import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/Write.module.css';
import { FaTimes } from 'react-icons/fa';

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
        <li className={styles.skills_list_item__li}>
          <div>
            <form className={styles.form}>
              <input
                className={styles.inputName}
                type="text"
                name="skill"
                placeholder="기술"
                data-index={index}
                value={skill}
                onChange={onChangeSkillFields}
              />
            </form>
            <form>
              <input
                type="text"
                name="desc"
                placeholder="기술 명과 기술에 대한 상세 설명을 기재해주세요"
                data-index={index}
                value={desc}
                onChange={onChangeSkillFields}
              />
            </form>
          </div>
          <button
            className={styles.skills_list_item_delete__button}
            onClick={() => onDeleteSkillFields(index)}
          >
            <FaTimes />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
