import React from 'react';
import styles from '../../../../../styles/pages/landing_page/review/ReviewCard.module.css';
import { FaStar } from 'react-icons/fa';
import { reviews } from '../../../../../data/landing_page/reviews/data';

const ReviewCard: React.FC = () => {
  const starIconMaker: (rating: number) => JSX.Element[] = (rating: number) => {
    const starList = new Array(rating).fill(5);
    return starList.map((_, index) => {
      return (
        <li key={index}>
          <FaStar />
        </li>
      );
    });
  };

  const reviewMaker = reviews.map((element) => {
    return (
      <li className={styles.review__card__list_item} key={element.name}>
        <header>
          <img
            className={styles.review__card__list__profile__img}
            src={element.profileImg}
            alt="preview_avatar"
          />
          <div className={styles.review__card__list__header__rating__block}>
            <strong>{element.name}</strong>
            <ul className={styles.review__card__list__star__list}>
              {starIconMaker(element.rating)}
            </ul>
          </div>
        </header>
        <article>{element.description}</article>
        <br />
        <br />
        <strong>구직 분야</strong>
        <span>{element.role}</span>
      </li>
    );
  });

  return <ul className={styles.review__card__list}>{reviewMaker}</ul>;
};

export default ReviewCard;
