import React from 'react';
import styles from '../../../../../styles/pages/landing_page/description/Description.module.css';

import description1 from '../../../../../public/description1.png';
import description2 from '../../../../../public/description2.png';

const Card: React.FC = () => {
  return (
    <div className={styles.card__container}>
      <ul className={styles.card__ul}>
        <li className={styles.card__item}>
          <img src={description1} alt="descriptionIcon" />
          <div>
            <h2 className={styles.card__title}>빠르게 ! 간단하게 ! 멋지게 !</h2>
            <p className={styles.card__desc}>
              모두의 이력서로 쉽고 간단하게 멋진 이력서를 완성해보세요!
              <br />
              이력서 양식은 신경 쓰지 마세요! 모두의 이력서가 멋진 이력서 양식을
              제공해드립니다. <br />
              개인 정보를 입력하면 멋진 이력서가 완성됩니다. 완성 후 PDF로
              다운로드 받으세요.
            </p>
          </div>
        </li>

        <li className={styles.card__item}>
          <img src={description2} alt="descriptionIcon2" />
          <div>
            <h2 className={styles.card__title}>
              소셜 계정으로 이력서 관리까지 한 번에 해결하세요 !
            </h2>
            <p className={styles.card__desc}>
              소셜 계정으로 간편하게 로그인하고 만든 이력서들을 보관 및
              관리해보세요. <br />
              모두의 이력서에 로그인하면 만든 이력서들을 모아 두고 관리할 수
              있습니다. <br />
              이미 만들어진 이력서 수정도 간편하게 수정이 가능합니다.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Card;
