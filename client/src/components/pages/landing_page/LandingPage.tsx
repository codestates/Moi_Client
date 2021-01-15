import React from 'react';
import styles from '../../../styles/pages/landing_page/Index.module.css';
import Intro from './intro/Intro';
import Description from './description/Description';
import Review from '../landing_page/review/Review';
import Footer from './footer/Footer';
const LandingPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Intro />
      <Description />
      <Review />
      <Footer />
    </div>
  );
};

export default LandingPage;
