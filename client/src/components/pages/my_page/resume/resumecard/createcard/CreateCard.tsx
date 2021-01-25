import React from 'react';
import styles from '../../../../../../styles/pages/my_page/resume/resumecard/createcard/CreateCard.module.css';
import { GiNewspaper } from 'react-icons/gi';
import { useHistory } from 'react-router-dom';
const CreateCard: React.FC = () => {
  const history = useHistory();
  const btnClickHandler = () => {
    history.push({
      pathname: '/template',
    });
  };
  return (
    <div className={styles.create__item} onClick={btnClickHandler}>
      <div className={styles.create__item__iconContainer}>
        <GiNewspaper className={styles.create__item__icon} />
      </div>
      <div className={styles.create__item__textContainer}>
        <h3 className={styles.create__item__title}>새 이력서 작성하기</h3>
        {/* <p className={styles.create__item__desc}></p> */}
      </div>
    </div>
  );
};

export default CreateCard;
