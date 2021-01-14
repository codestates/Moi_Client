import React from 'react';
import styles from '../../../../../styles/pages/landing_page/review/ReviewTitle.module.css';

const Title: React.FC = () => {
  return (
    <header className={styles.landing__review__header}>
      <h3> 사용자가 말하는 CV 이력서 작성기란?</h3>
      <p> CV 이력서 작성기 덕분에 꿈에 그리던 직장에 취업할 수 있었습니다:</p>
    </header>
  );
};

export default Title;
