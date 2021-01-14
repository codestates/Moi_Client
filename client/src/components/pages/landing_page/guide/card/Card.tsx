import React from 'react';
import styles from '../../../../../styles/pages/landing_page/guide/GuideCard.module.css';
import { FcOk } from 'react-icons/fc';
const Card: React.FC = () => {
  return (
    <article className={styles.guide__card__article}>
      <div className={styles.guide__card__block}>
        <span className={styles.guide__card__block__strong}>
          <strong>전문적인 이력서를 작성해보세요</strong>
        </span>
        <ul className={styles.guide__card__block__list}>
          <li>
            <span>
              <FcOk />
            </span>
            CV 이력서 작성기를 사용하면 팁 및 요령을 활용하여 매우 용이하게
            전문적인 이력서를 작성할 수 있습니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            단 15분만에 돋보이는 전문적인 이력서를 작성해보십시오.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            작성된 이력서는 개인적이고 안전한 계정 허브에 저장됩니다. 언제
            어디서나 필요시 이력서를 교정 및 다운로드할 수 있습니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            이력서에 어울리는 강력한 입사지원서를 작성해보십시오.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            단 3,950원으로 7일간의 체험 기간 동안 모든 기능을 사용한 이후에 매달
            25,999원으로 가격이 인상됩니다.
          </li>
        </ul>
      </div>
      <div className={styles.guide__card__block}>
        <span className={styles.guide__card__block__strong}>
          <strong>전문적인 이력서를 작성해보세요</strong>
        </span>
        <ul className={styles.guide__card__block__list}>
          <li>
            <span>
              <FcOk />
            </span>
            CV 이력서 작성기를 사용하면 팁 및 요령을 활용하여 매우 용이하게
            전문적인 이력서를 작성할 수 있습니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            단 15분만에 돋보이는 전문적인 이력서를 작성해보십시오.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            작성된 이력서는 개인적이고 안전한 계정 허브에 저장됩니다. 언제
            어디서나 필요시 이력서를 교정 및 다운로드할 수 있습니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            이력서에 어울리는 강력한 입사지원서를 작성해보십시오.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            단 3,950원으로 7일간의 체험 기간 동안 모든 기능을 사용한 이후에 매달
            25,999원으로 가격이 인상됩니다.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
