import React from 'react';
import styles from '../../../../styles/pages/landing_page/footer/Footer.module.css';
import Title from './title/Title';
const Footer: React.FC = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <Title />
      </div>
    </section>
  );
};
export default Footer;
