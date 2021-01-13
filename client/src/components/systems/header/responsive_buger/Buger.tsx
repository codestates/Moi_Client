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
      <ul className={styles.buger__list}>
        <li>
          <a href="#">
            <FcApprove />
            로그인
          </a>
        </li>
        <li>
          <a href="#">
            <FcRules />
            이력서 작성하기
          </a>
        </li>
        <li>
          <a href="#">
            <FcViewDetails />내 이력서
          </a>
        </li>
        <li>
          <a href="#">
            <FcVoicePresentation />
            문의하기
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Buger;
