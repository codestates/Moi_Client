import React from 'react';
import styles from '../../../../styles/pages/template_page/title/Title.module.css';

const Title: React.FC = () => {
  return (
    <div className={styles.template__title__container}>
      <header>
        <h1>템플릿 선택하기</h1>
      </header>
    </div>
  );
};

export default Title;
