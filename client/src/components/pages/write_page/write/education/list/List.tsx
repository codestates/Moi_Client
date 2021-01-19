import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/education/Education.module.css';
interface ListProps {
  eduTitle: string;
  eduDesc: string;
  index: number;
  onChangeEducationFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEducationFields: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  eduTitle,
  eduDesc,
  index,
  onChangeEducationFields,
  onDeleteEducationFields,
}) => {
  return (
    <div className={styles.skills_listContainer}>
      <ul className={styles.skills_list}>
        <li className={styles.skills_list_item}>
          <form className={styles.skills_formName}>
            <input
              className={styles.inputName}
              type="text"
              name="eduTitle"
              placeholder="학교명"
              data-index={index}
              value={eduTitle}
              onChange={onChangeEducationFields}
            />
          </form>
          <form className={styles.skills_formDesc}>
            <input
              className={styles.inputDesc}
              type="text"
              name="eduDesc"
              placeholder="전공 및 학위"
              data-index={index}
              value={eduDesc}
              onChange={onChangeEducationFields}
            />
          </form>
          <button
            className={styles.skills_list_button}
            onClick={() => onDeleteEducationFields(index)}
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
