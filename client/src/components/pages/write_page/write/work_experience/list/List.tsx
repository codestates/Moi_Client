import React from 'react';
import styles from '../../../../../../styles/pages/write_page/write/WorkExperience.module.css';
import JobDesc from '../jobDesc/JobDesc';
import { FaTimes } from 'react-icons/fa';
import { DescItem } from '../../../../../../modules/changeField/workExperience/types';

interface ListProps {
  stateProperty: {
    companyName: string;
    positionName: string;
    start: string;
    end: string;
  };
  addWork: (index: number) => void;
  index: number;
  desc: DescItem[];
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const List: React.FC<ListProps> = ({
  stateProperty,
  addWork,
  index,
  desc,
  changeExperienceFields,
}) => {
  const jobDescriptions = desc.map((ele, index) => {
    return <JobDesc key={index} index={index} description={ele.description} />;
  });

  return (
    <div className={styles.skills_listContainer}>
      <ul>
        <li className={styles.workExperience__list}>
          <div className={styles.workExperience__period__container}>
            <div className={styles.workExperience__period__block}>
              <input
                type="text"
                className={styles.workExperience__period__input}
                value={stateProperty.start}
                data-index={index}
                name="start"
                onChange={changeExperienceFields}
                placeholder="YYYY.MM"
              />
              <span>~</span>
              <input
                type="text"
                className={styles.workExperience__period__input}
                value={stateProperty.end}
                data-index={index}
                name="end"
                onChange={changeExperienceFields}
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
                name="companyName"
                placeholder="회사명"
                value={stateProperty.companyName}
                data-index={index}
                onChange={changeExperienceFields}
              />
            </form>
            <form className={styles.skills__form_Desc}>
              <input
                type="text"
                name="positionName"
                placeholder="직무명"
                value={stateProperty.positionName}
                data-index={index}
                onChange={changeExperienceFields}
              />
            </form>
            <div className={styles.add_work__block}>
              <button onClick={() => addWork(index)}>+ 주요 성과 추가</button>
            </div>
            <ul>{jobDescriptions}</ul>
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
