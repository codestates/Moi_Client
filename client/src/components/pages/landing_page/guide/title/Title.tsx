import React from 'react';
import styles from '../../../../../styles/pages/landing_page/guide/GuideTitle.module.css';

const Title: React.FC = () => {
  return (
    <header className={styles.landing__guide__header}>
      <h3> 성공적으로 지원하기</h3>
      <p>
        CV 이력서 작성기의 도움으로 매우 쉽게 전문적인 이력서를 작성할 수
        있습니다. CV 이력서 작성기를 사용하여 빠르고 쉽게 스스로 작성하거나,
        전문가에게 요청하여 작성할 수 있습니다 - 항상 돋보이는 이력서를 작성할
        수 있습니다.
      </p>
    </header>
  );
};

export default Title;
