import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/education/Education.module.css';
import { FaTimes, FaAngleUp, FaAngleDown } from 'react-icons/fa';

interface ListProps {
  stateProperty: {
    certificateTitle: string;
    certificateDesc: string;
    certificateDate: string;
    dropDownToggle: boolean;
  };
  index: number;
  onChangeCertificateFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteCertificateFields: (index: number) => void;
  onToggleCetrificateDropdown: (index: number) => void;
}

const List: React.FC<ListProps> = ({
  stateProperty,
  index,
  onChangeCertificateFields,
  onDeleteCertificateFields,
  onToggleCetrificateDropdown,
}) => {
  return (
    <div>
      <ul>
        <li className={styles.education_list__li}>
          <div className={styles.education_list_header}>
            <button
              className={styles.education_list_header__button}
              type="button"
              onClick={() => onToggleCetrificateDropdown(index)}
            >
              {stateProperty.certificateTitle
                ? stateProperty.certificateTitle
                : '자격증 명'}
            </button>
            {stateProperty.dropDownToggle ? <FaAngleUp /> : <FaAngleDown />}
            {stateProperty.certificateDate ? (
              <p>{`${stateProperty.certificateDate}`}</p>
            ) : (
              <p>2021.01 - 2021.01</p>
            )}
            <button
              className={styles.education_delete__button}
              onClick={() => onDeleteCertificateFields(index)}
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
                  자격증 명
                  <form>
                    <input
                      type="text"
                      name="certificationTitle"
                      value={stateProperty.certificateTitle}
                      data-index={index}
                      onChange={onChangeCertificateFields}
                    />
                  </form>
                </div>
                <div
                  className={styles.education_company_and_position_block__div}
                >
                  발급 기관
                  <form>
                    <input
                      type="text"
                      name="certificationDesc"
                      value={stateProperty.certificateDesc}
                      data-index={index}
                      onChange={onChangeCertificateFields}
                    />
                  </form>
                </div>
              </div>
              <div className={styles.education_period_container__div}>
                <div className={styles.education_period_title_block__div}>
                  취득 날짜
                </div>
                <input
                  type="text"
                  className={styles.education_period__input}
                  value={stateProperty.certificateDate}
                  data-index={index}
                  name="certificationDate"
                  onChange={onChangeCertificateFields}
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
