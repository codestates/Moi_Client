import React from 'react';
import styles from '../../../../../styles/pages/landing_page/guide/GuideTitle.module.css';

const Title: React.FC = () => {
  return (
    <header className={styles.landing__guide__header}>
      <h3> 좋은 이력서를 작성하는 TIP!</h3>
      <p>
        이력서를 처음 써보시는 분들을 위해 모두의 이력서가 간단한 가이드를
        제공해드립니다 !
      </p>
    </header>
  );
};

export default Title;
