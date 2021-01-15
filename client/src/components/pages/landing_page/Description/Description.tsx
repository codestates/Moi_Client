import React from 'react';
import styles from '../../../../styles/pages/landing_page/description/Description.module.css';
import Card from './card/Card';
import Desc from './desc/Desc';
const Description: React.FC = () => {
  return (
    <>
      <section className={styles.block}>
        <div className={styles.container}>
          <Desc />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Description;
