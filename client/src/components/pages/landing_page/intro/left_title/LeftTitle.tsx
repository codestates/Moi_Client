import React from 'react';
import styles from '../../../../../styles/pages/landing_page/intro/Intro.module.css';
import { Link } from 'react-router-dom';
interface LeftTitleProps {
  checkModal: boolean;
  onAuthCheckModal: (state: boolean) => void;
}

const LeftTitle: React.FC<LeftTitleProps> = ({
  checkModal,
  onAuthCheckModal,
}) => {
  return (
    <div className={styles.intro__title__container}>
      <article>
        <span>
          <strong className={styles.intro__title}>모</strong>
        </span>
        <article className={styles.intro__title__block}>
          <p className={styles.intro__title__sub}>행운을 물어다줄</p>
          <p className={styles.intro__title__big}>두의 이력서</p>
        </article>
      </article>
      <article className={styles.intro__desc__article}>
        <p>
          열심히 노력한 당신을 <span>위한</span>
        </p>
        <p>행운을 담은 이력서 지금 체험해보세요</p>
      </article>

      <button
        className={styles.start__button}
        onClick={() => onAuthCheckModal(true)}
      >
        시작하기
      </button>
    </div>
  );
};

export default LeftTitle;
