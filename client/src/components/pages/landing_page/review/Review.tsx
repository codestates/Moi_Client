import React from 'react';
import ReviewCard from './review_card/ReviewCard';
import Title from './title/Title';
import styles from '../../../../styles/pages/landing_page/review/Review.module.css';

const Review: React.FC = () => {
  return (
    <section className={styles.landing__review__section}>
      <div className={styles.landing__review__block}>
        <Title />
        <ReviewCard />
      </div>
    </section>
  );
};

export default Review;
