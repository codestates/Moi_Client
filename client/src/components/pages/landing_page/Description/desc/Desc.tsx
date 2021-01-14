import React from 'react';
import styles from '../../../../../styles/pages/landing_page/Description/Description.module.css';
const Desc: React.FC = () => {
  return (
    <div className={styles.desc__container}>
      <div className={styles.desc_title}>
        <span className={styles.desc_green}>성공적인</span>
        이력서 작성하기
      </div>
      <p className={styles.desc_subTitle}>
        모두의 이력서를 통해 온라인으로 빠르고
        <br />
        전문적인 이력서를 작성해보세요.
      </p>
    </div>
  );
};

export default Desc;
