import React from 'react';
import styles from '../../../styles/pages/landing_page/Index.module.css';
import Intro from './intro/Intro';
import Description from './description/Description';
import Review from '../landing_page/review/Review';
import Footer from './footer/Footer';
import Guide from '../landing_page/guide/Guide';
import { Element } from 'react-scroll';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Intro />
      {/* // ? destination point for scroll event (react-scroll) */}
      <Element name="description">
        <Description />
      </Element>
      {/* // ? destination point for scroll event (react-scroll) */}
      <Element name="review">
        <Review />
      </Element>
      {/* // ? destination point for scroll event (react-scroll) */}
      <Element name="guide">
        <Guide />
      </Element>
      <Footer />
    </div>
  );
};

export default LandingPage;
