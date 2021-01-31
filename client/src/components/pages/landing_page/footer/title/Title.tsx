import React from 'react';
import styles from '../../../../../styles/pages/landing_page/footer/Footer.module.css';

const Title: React.FC = () => {
  return (
    <div className={styles.footer__header}>
      <h3 className={styles.footer__title}>
        이미 112,872명 이상의 사용자들이 모두의 이력서를 사용했습니다
      </h3>
      <p className={styles.footer__desc}>
        모두의 이력서와 함께라면 뛰어나고 전문적인 이력서를 단 15분 내에 빠르고
        간편하게 작성할 수 있습니다
      </p>
      <p className={styles.footer__copylight}>2021 © everysmoi.tk</p>
    </div>
  );
};
export default Title;
