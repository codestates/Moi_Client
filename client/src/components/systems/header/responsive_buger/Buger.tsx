import React from 'react';
import styles from '../../../../styles/systems/header/Buger.module.css';
import headerLogo from '../../../../public/headerLogo.png';
import { GoX } from 'react-icons/go';
import {
  FcApprove,
  FcRules,
  FcViewDetails,
  FcVoicePresentation,
} from 'react-icons/fc';

// ? ====================
// ?   INTERFACE
// ? ====================
interface BugerProps {
  bugerMenu: boolean;
  onBugerMenu: () => void;
}
// * ====================
// *  REACT.FC
// * ====================
const Buger: React.FC<BugerProps> = ({ bugerMenu, onBugerMenu }) => {
  return (
    <nav
      className={
        bugerMenu
          ? styles.container__nav__block__avtive
          : styles.container__nav__block
      }
    >
      <span className={styles.buger__right_block}>
        <button type="button" onClick={onBugerMenu}>
          <GoX />
        </button>
      </span>
      <div className={styles.buger__logo__block}>
        <img src={headerLogo} alt="logo" />
      </div>
      <div className={styles.bugger__list_block}>
        <ul className={styles.buger__list}>
          <li>
            <a href="#">
              <FcApprove />
              로그인
            </a>
            <div className={styles.buger__list__underBar__login}></div>
          </li>
          <li>
            <a href="#">
              <FcRules />
              이력서 작성하기
            </a>
            <div className={styles.buger__list__underBar__resume}></div>
          </li>
          <li>
            <a href="#">
              <FcViewDetails />내 이력서
            </a>
            <div className={styles.buger__list__underBar_my__resume}></div>
          </li>
          <li>
            <a href="#">
              <FcVoicePresentation />
              문의하기
            </a>
            <div className={styles.buger__list__underBar__ask}></div>
          </li>
        </ul>
        <p className={styles.buger__list__copyright}>2021 © moi.co.kr</p>
      </div>
    </nav>
  );
};

export default Buger;
