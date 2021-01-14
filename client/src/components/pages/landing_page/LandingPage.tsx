import React from 'react';
import styles from '../../../styles/pages/landing_page/Index.module.css';
import Intro from '../landing_page/Intro/Intro';
import Description from '../landing_page/Description/Description';
import Review from '../landing_page/review/Review';
const LandingPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Intro />
      <Description />
      <Review />
    </div>
  );
};

export default LandingPage;
