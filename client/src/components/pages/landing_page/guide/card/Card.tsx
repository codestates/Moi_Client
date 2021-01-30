import React from 'react';
import styles from '../../../../../styles/pages/landing_page/guide/GuideCard.module.css';
import { FcOk } from 'react-icons/fc';
const Card: React.FC = () => {
  return (
    <article className={styles.guide__card__article}>
      <div className={styles.guide__card__block}>
        <span className={styles.guide__card__block__strong}>
          <strong>이런 점들을 주의 해주세요!</strong>
        </span>
        <ul className={styles.guide__card__block__list}>
          <li>
            <span>
              <FcOk />
            </span>
            프로필에 잘못된 정보가 없는지 꼭 확인하세요.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            기술란에 자신의 능력을 부풀려서 기술하지 마세요. 후에 면접에서
            질문에 대답을 못 하게 됩니다. 최대한 솔직하게 기술해 주세요.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            학력사항을 초등학교부터 적지 마세요. 최종학력은 고등학교 이상이
            보편적입니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            경력은 어떠한 일을 했는지 담당업무를 구체적으로 작성해주세요.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            경력이 없는 경우 프로젝트와 대외활동 및 수상 경력 그리고 자격증으로
            충분히 커버가 가능합니다. 그러나 해당 직무와 관련 없는 내용은
            삼가주세요.
          </li>
        </ul>
      </div>
      <div className={styles.guide__card__block}>
        <span className={styles.guide__card__block__strong}>
          <strong>이런점들은 참고하시면 좋아요 :)</strong>
        </span>
        <ul className={styles.guide__card__block__list}>
          <li>
            <span>
              <FcOk />
            </span>
            프로필에 정확한 인적 사항을 기재하세요. 기업으로부터 연락을 받기
            위해 반드시 연락 수단을 기재하셔야 합니다.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            간단한 소개 글로 자신을 어필해보세요. 짤막하게 본인을 소개하는 글로
            지원 동기나 자신의 의지를 표현해보세요
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            본인이 자신 있는 기술을 어필해보세요. 기술에 대한 설명과 능력치를
            표현해보세요
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            학력사항은 최종학력부터 작성하세요. 학교명과 재학 기간, 전공명을
            정확히 기재하세요.
          </li>
          <li>
            <span>
              <FcOk />
            </span>
            경력은 가장 최근부터 작성하되, 주요사항을 기재하세요 자신이 이루어낸
            성과를 기록해보세요.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
