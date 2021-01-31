import React from 'react';
import styles from '../../../../../styles/pages/landing_page/description/Description.module.css';
const Desc: React.FC = () => {
  return (
    <div className={styles.desc__container}>
      <p className={styles.desc_subTitle}>
        모두의 이력서를 통해 브라우저및 모바일에서 빠르고
        <br />
        전문적인 이력서를 작성해보세요!
      </p>
    </div>
  );
};

export default Desc;
