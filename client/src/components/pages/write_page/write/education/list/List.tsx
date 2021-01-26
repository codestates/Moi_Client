import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/education/Education.module.css';
import { FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa';

interface ListProps {
  stateProperty: {
    eduTitle: string;
    eduDesc: string;
    start: string;
    end: string;
    dropDownToggle: boolean;
  };
  index: number;
  onChangeEducationFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEducationFields: (index: number) => void;
  onToggleEduDropdown: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  stateProperty,
  index,
  onChangeEducationFields,
  onDeleteEducationFields,
  onToggleEduDropdown,
}) => {
  return (
    <div>
      <ul>
        <li className={styles.education_list__li}>
          <div className={styles.education_list_header}>
            <button
              className={styles.education_list_header__button}
              type="button"
              onClick={() => onToggleEduDropdown(index)}
            >
              {stateProperty.eduTitle
                ? stateProperty.eduTitle
                : '학교 및 기관명'}
            </button>
            {stateProperty.dropDownToggle ? <FaAngleUp /> : <FaAngleDown />}
            {stateProperty.start ? (
              <p>{`${stateProperty.start} - ${stateProperty.end}`}</p>
            ) : (
              <p>2021.01 - 2021.01</p>
            )}
            <button
              className={styles.education_delete__button}
              onClick={() => onDeleteEducationFields(index)}
            >
              <FaTimes />
            </button>
          </div>
          {stateProperty.dropDownToggle && (
            <>
              <div
                className={styles.education_company_and_position_container__div}
              >
                <div
                  className={styles.education_company_and_position_block__div}
                >
                  학교 및 기관 명
                  <form>
                    <input
                      type="text"
                      name="eduTitle"
                      value={stateProperty.eduTitle}
                      data-index={index}
                      onChange={onChangeEducationFields}
                    />
                  </form>
                </div>
                <div
                  className={styles.education_company_and_position_block__div}
                >
                  전공 및 이수 내용
                  <form>
                    <input
                      type="text"
                      name="eduDesc"
                      value={stateProperty.eduDesc}
                      data-index={index}
                      onChange={onChangeEducationFields}
                    />
                  </form>
                </div>
              </div>
              <div className={styles.education_period_container__div}>
                <div className={styles.education_period_title_block__div}>
                  근무 기간
                </div>
                <input
                  type="text"
                  className={styles.education_period__input}
                  value={stateProperty.start}
                  data-index={index}
                  name="start"
                  onChange={onChangeEducationFields}
                  placeholder="YYYY.MM"
                />
                <span className={styles.education_period_wave__span}>~</span>
                <input
                  type="text"
                  className={styles.education_period__input}
                  value={stateProperty.end}
                  data-index={index}
                  name="end"
                  onChange={onChangeEducationFields}
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
