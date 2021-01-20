import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/aea/Aea.module.css';
interface ListProps {
  aeaTitle: string;
  aeaDesc: string;
  index: number;
  onChangeAeaFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAeaFields: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  aeaTitle,
  aeaDesc,
  index,
  onChangeAeaFields,
  onDeleteAeaFields,
}) => {
  return (
    <div className={styles.aea_listContainer}>
      <ul className={styles.aea_list}>
        <li className={styles.aea_list_item}>
          <form className={styles.aea_formName}>
            <input
              className={styles.inputName}
              type="text"
              name="aeaTitle"
              placeholder="활동명"
              data-index={index}
              value={aeaTitle}
              onChange={onChangeAeaFields}
            />
          </form>
          <form className={styles.aea_formDesc}>
            <input
              className={styles.inputDesc}
              type="text"
              name="aeaDesc"
              placeholder="세부사항"
              data-index={index}
              value={aeaDesc}
              onChange={onChangeAeaFields}
            />
          </form>
          <button
            className={styles.aea_list_button}
            onClick={() => onDeleteAeaFields(index)}
          >
            삭제
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
