import React from 'react';
import styles from '../../../../styles/pages/landing_page/intro/Intro.module.css';
import LeftTitle from './left_title/LeftTitle';
import RightPreview from './right_preview/RightPreview';

const Intro: React.FC = () => {
  return (
    <>
      <section className={styles.block}>
        <div className={styles.container}>
          <LeftTitle />
          <RightPreview />
        </div>
      </section>
    </>
  );
};

export default Intro;
