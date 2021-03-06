import React from 'react';
import styles from '../../../../../styles/pages/landing_page/intro/Intro.module.css';
import birdImg from '../../../../../public/intro_Bird_illust.png';
interface LeftTitleProps {
  onAuthCheckModal: (state: boolean, type: string) => void;
}

const LeftTitle: React.FC<LeftTitleProps> = ({ onAuthCheckModal }) => {
  return (
    <div className={styles.intro__title__container}>
      <article>
        <span>
          <img src={birdImg} alt="moiBird" />
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
        onClick={() => onAuthCheckModal(true, 'write')}
      >
        시작하기
      </button>
    </div>
  );
};

export default LeftTitle;
