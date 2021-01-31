import React from 'react';
import styles from '../../../../../styles/pages/landing_page/review/ReviewTitle.module.css';

const Title: React.FC = () => {
  return (
    <header className={styles.landing__review__header}>
      <h3> 사용자가 말하는 모두의 이력서란?</h3>
      <p>
        모두의 이력서 덕분에 언제 어디서든 손쉽게 이력서를 작성할 수 있어서 구직
        할동에 큰 도움이 되었어요.
      </p>
    </header>
  );
};

export default Title;
