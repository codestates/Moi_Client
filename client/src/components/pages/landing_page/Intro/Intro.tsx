import React from 'react';
import styles from '../../../../styles/pages/landing_page/Intro/Intro.module.css';
import LeftTitle from './left_title/LeftTitle';
import RightPreview from './right_preview/RightPreview';
import { VscFoldDown } from 'react-icons/vsc';

const Intro: React.FC = () => {
  return (
    <>
      <section className={styles.block}>
        <div className={styles.container}>
          <LeftTitle />
          <RightPreview />
        </div>
        <div>
          <button className={styles.intro__button}>
            <VscFoldDown />
          </button>
        </div>
      </section>
    </>
  );
};

export default Intro;
