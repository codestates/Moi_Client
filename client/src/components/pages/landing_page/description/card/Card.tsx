import React from 'react';
import styles from '../../../../../styles/pages/landing_page/description/Description.module.css';
import { AiTwotoneLike } from 'react-icons/ai';
import { AiTwotoneFileText } from 'react-icons/ai';
import { AiFillDiff } from 'react-icons/ai';
const Card: React.FC = () => {
  return (
    <div className={styles.card__container}>
      <ul className={styles.card__ul}>
        <li className={styles.card__item}>
          <AiTwotoneFileText className={styles.card__icon} />
          <h2 className={styles.card__title}>빠르고 간편한 이력서 작성기</h2>
          <p className={styles.card__desc}>
            모두의 이력서와 함께라면 누구나 간단하고 빠르게 전문적인 이력서를
            작성할 수 있습니다.
            <br />
            원하는 템플릿을 선택하고 이력서를 작성해보세요 (비회원은 저장 불가)
            마지막으로,
            <br />
            작성한 이력서를 저장하거나, pdf 파일로 다운받아보세요
          </p>
        </li>
        <li className={styles.card__item}>
          <AiTwotoneLike className={styles.card__icon} />
          <h2 className={styles.card__title}>취업 성공률 증가</h2>
          <p className={styles.card__desc}>
            대표적이고 전문적인 이력서는 여러 지원자 중에서 당신을 단연 돋보이게
            하는 효과가 있습니다
            <br />
            모두의 이력서를 통해 작성한 전문적인 이력서는 면접을 보게 될 확률이
            최대 65% 상승합니다
          </p>
        </li>
        <li className={styles.card__item}>
          <AiFillDiff className={styles.card__icon} />
          <h2 className={styles.card__title}>이력서 정리하기</h2>
          <p className={styles.card__desc}>
            때때로 지원하는 직업에 따라 이력서를 수정하는 것이 중요합니다 모두의
            이력서와 함께
            <br />
            개인 계정을 통해 여러 종류의 이력서를 작성하고 작성된 이력서를
            체계적으로 관리할 수 있습니다
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
