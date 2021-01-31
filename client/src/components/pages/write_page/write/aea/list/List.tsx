import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/aea/Aea.module.css';
import { FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa';

interface ListProps {
  stateProperty: {
    aeaTitle: string;
    aeaDesc: string;
    aeaDate: string;
    dropDownToggle: boolean;
  };
  index: number;
  onChangeAeaFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAeaFields: (index: number) => void;
  onToggleAeaDropdown: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  stateProperty,
  index,
  onChangeAeaFields,
  onDeleteAeaFields,
  onToggleAeaDropdown,
}) => {
  return (
    <div>
      <ul>
        <li className={styles.aea_list__li}>
          <div className={styles.aea_list_header}>
            <button
              className={styles.aea_list_header__button}
              type="button"
              onClick={() => onToggleAeaDropdown(index)}
            >
              {stateProperty.aeaTitle
                ? stateProperty.aeaTitle
                : '수상 및 활동 명'}
            </button>
            {stateProperty.dropDownToggle ? <FaAngleUp /> : <FaAngleDown />}
            {stateProperty.aeaDate ? (
              <p>{stateProperty.aeaDate}</p>
            ) : (
              <p>2021.01</p>
            )}
            <button
              className={styles.aea_delete__button}
              onClick={() => onDeleteAeaFields(index)}
            >
              <FaTimes />
            </button>
          </div>
          {stateProperty.dropDownToggle && (
            <>
              <div className={styles.aea_company_and_position_container__div}>
                <div className={styles.aea_company_and_position_block__div}>
                  수상 및 활동 명
                  <form>
                    <input
                      type="text"
                      name="aeaTitle"
                      value={stateProperty.aeaTitle}
                      data-index={index}
                      onChange={onChangeAeaFields}
                    />
                  </form>
                </div>
                <div className={styles.aea_company_and_position_block__div}>
                  세부사항
                  <form>
                    <input
                      type="text"
                      name="aeaDesc"
                      value={stateProperty.aeaDesc}
                      data-index={index}
                      onChange={onChangeAeaFields}
                    />
                  </form>
                </div>
              </div>
              <div className={styles.aea_period_container__div}>
                <div className={styles.aea_period_title_block__div}>날짜</div>
                <input
                  type="text"
                  className={styles.aea_period__input}
                  value={stateProperty.aeaDate}
                  data-index={index}
                  name="aeaDate"
                  onChange={onChangeAeaFields}
                  placeholder="YYYY.MM"
                />
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default List;
