import React from 'react';
import styles from '../../../../../styles/pages/landing_page/review/ReviewCard.module.css';
import { FaStar } from 'react-icons/fa';
import avatar from '../../../../../public/avatar1.png';

const ReviewCard: React.FC = () => {
  return (
    <ul className={styles.review__card__list}>
      <li className={styles.review__card__list_item}>
        <header>
          <img src={avatar} alt="preview_avatar" />
          <div className={styles.review__card__list__header__rating__block}>
            <strong>박준형</strong>
            <ul className={styles.review__card__list__star__list}>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
        </header>
        <article>
          확실히 CV 이력서 작성기를 사용하길 잘 했다는 생각이 듭니다. 단 15분
          만에 이력서를 완성하여 이메일 프로그램을 통해 전송할 수 있었습니다.
        </article>
        <br />
        <br />
        <strong>구직 분야</strong>
        <span>소프트웨어 개발</span>
      </li>
      <li className={styles.review__card__list_item}>
        <header>
          <img src={avatar} alt="preview_avatar" />
          <div className={styles.review__card__list__header__rating__block}>
            <strong>박준형</strong>
            <ul className={styles.review__card__list__star__list}>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
        </header>
        <article>
          확실히 CV 이력서 작성기를 사용하길 잘 했다는 생각이 듭니다. 단 15분
          만에 이력서를 완성하여 이메일 프로그램을 통해 전송할 수 있었습니다.
        </article>
        <br />
        <br />
        <strong>구직 분야</strong>
        <span>소프트웨어 개발</span>
      </li>
      <li className={styles.review__card__list_item}>
        <header>
          <img src={avatar} alt="preview_avatar" />
          <div className={styles.review__card__list__header__rating__block}>
            <strong>박준형</strong>
            <ul className={styles.review__card__list__star__list}>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
          </div>
        </header>
        <article>
          확실히 CV 이력서 작성기를 사용하길 잘 했다는 생각이 듭니다. 단 15분
          만에 이력서를 완성하여 이메일 프로그램을 통해 전송할 수 있었습니다.
        </article>
        <br />
        <br />
        <strong>구직 분야</strong>
        <span>소프트웨어 개발</span>
      </li>
    </ul>
  );
};

export default ReviewCard;
