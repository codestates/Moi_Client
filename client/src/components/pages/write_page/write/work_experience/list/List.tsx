import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import JobDesc from '../jobDesc/JobDesc';
import { FaTimes } from 'react-icons/fa';
import { DescItem } from '../../../../../../modules/changeField/workExperience/types';
import { ExperienceItem } from '../../../../../../modules/changeField/workExperience/types';

interface ListProps {
  stateProperty: {
    companyName: string;
    positionName: string;
    start: string;
    end: string;
  };
  addJobDescription: (index: number) => void;
  index: number;
  desc: DescItem[];
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeJobDescriptionFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteExperienceFields: (index: number) => void;
  onDeleteJobDescFields: (
    experienceIndex: number,
    jobDescIndex: number,
  ) => void;
  onCheckInOffice: (index: number) => void;
  workExperience: ExperienceItem[];
}

const List: React.FC<ListProps> = ({
  stateProperty,
  addJobDescription,
  index,
  desc,
  changeExperienceFields,
  changeJobDescriptionFields,
  onDeleteExperienceFields,
  onDeleteJobDescFields,
  onCheckInOffice,
  workExperience,
}) => {
  const jobDescriptions = desc.map((ele, idx) => {
    return (
      <JobDesc
        key={idx}
        experienceIndex={index}
        jobIndex={idx}
        description={ele.description}
        changeJobDescriptionFields={changeJobDescriptionFields}
        onDeleteJobDescFields={onDeleteJobDescFields}
      />
    );
  });

  return (
    <div>
      <ul>
        <li className={styles.experience_list__li}>
          <div
            className={styles.experience_company_and_position_container__div}
          >
            <div className={styles.experience_company_and_position_block__div}>
              회사명
              <form>
                <input
                  type="text"
                  name="companyName"
                  value={stateProperty.companyName}
                  data-index={index}
                  onChange={changeExperienceFields}
                />
              </form>
            </div>
            <div className={styles.experience_company_and_position_block__div}>
              직무명
              <form>
                <input
                  type="text"
                  name="positionName"
                  value={stateProperty.positionName}
                  data-index={index}
                  onChange={changeExperienceFields}
                />
              </form>
            </div>
          </div>

          <div className={styles.experience_period_container__div}>
            <div className={styles.experience_period_title_block__div}>
              근무 기간
              <span className={styles.experience_period_in_office__span}>
                <input
                  type="checkbox"
                  onChange={() => onCheckInOffice(index)}
                />
                <strong> 현재 재직중</strong>
              </span>
            </div>
            <input
              type="text"
              className={styles.experience_period__input}
              value={stateProperty.start}
              data-index={index}
              name="start"
              onChange={changeExperienceFields}
              placeholder="YYYY.MM"
            />
            <span className={styles.experience_period_wave__span}>~</span>
            {!workExperience[index].inOffice && (
              <input
                type="text"
                className={styles.experience_period__input}
                value={stateProperty.end}
                data-index={index}
                name="end"
                onChange={changeExperienceFields}
                placeholder="YYYY.MM"
              />
            )}
          </div>

          <div className={styles.experience_add_work_container_div}>
            <div className={styles.add_work__block}>
              <button onClick={() => addJobDescription(index)}>
                + 주요 성과 추가
              </button>
            </div>
            <ul className={styles.experience_job_desc_list__ul}>
              {jobDescriptions}
            </ul>
          </div>
          <button
            className={styles.experience_delete__button}
            onClick={() => onDeleteExperienceFields(index)}
          >
            <FaTimes />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default List;
