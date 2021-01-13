import React from 'react';
import styles from '../../../../../styles/pages/landing_page/Intro/Intro.module.css';
const LeftTitle: React.FC = () => {
  return (
    <div className={styles.left__Menu}>
      <article className={styles.intro_bird}>
        <img src="/intro_Bird_illust.png" alt="logo" />
      </article>
      <article className={styles.first__desc}>
        <p className={styles.first__desc__p}>행운을 물어다줄</p>
      </article>
      <article className={styles.second__desc}>
        <strong className={styles.strong__text}>모</strong>
        <p className={styles.second__text}>두의 이력서</p>
      </article>
      <article className={styles.third__desc}>
        <p>
          열심히 노력한 당신을 <span>위한</span>
        </p>
        <p>행운을 담은 이력서 지금 체험해보세요</p>
      </article>
      <article className={styles.start__button}>
        <button>
          <span>시작하기</span>
        </button>
      </article>
    </div>
  );
};

export default LeftTitle;
