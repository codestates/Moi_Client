import React from 'react';
import styles from '../../../styles/pages/landing_page/Index.module.css';
import Intro from './intro/Intro';
import Description from './description/Description';
import Review from './review/Review';
import Footer from './footer/Footer';
import Guide from './guide/Guide';
import ScrollTopButton from './scrollTopButton/ScrollTopButton';
import { Element } from 'react-scroll';
import { Link } from 'react-scroll';

interface LandingPageProps {
  checkModal: boolean;
  type: string;
  onAuthCheckModal: (state: boolean, type: string) => void;
  onCloseModal: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  checkModal,
  type,
  onAuthCheckModal,
  onCloseModal,
}) => {
  return (
    <div className={styles.block}>
      <Element name="intro">
        <Intro
          checkModal={checkModal}
          type={type}
          onAuthCheckModal={onAuthCheckModal}
          onCloseModal={onCloseModal}
        />
      </Element>

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

      {/* // ? scroll to top (react-scroll) */}
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        duration={500}
      >
        <ScrollTopButton />
      </Link>

      <Footer />
    </div>
  );
};

export default LandingPage;
