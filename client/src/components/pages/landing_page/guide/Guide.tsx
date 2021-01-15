import React from 'react';
import Title from './title/Title';
import Card from './card/Card';
import styles from '../../../../styles/pages/landing_page/guide/Guide.module.css';

const Guide: React.FC = () => {
  return (
    <section className={styles.landing__guide__section}>
      <div className={styles.landing__guide__block}>
        <Title />
        <Card />
      </div>
    </section>
  );
};

export default Guide;
