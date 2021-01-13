import React from 'react';
import styles from '../../../styles/pages/landing_page/Index.module.css';
import Intro from '../landing_page/Intro/Intro';
const LandingPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Intro />
    </div>
  );
};

export default LandingPage;
