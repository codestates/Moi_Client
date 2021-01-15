import React from 'react';
import styles from '../../../../styles/systems/header/DropDown.module.css';
import { Link } from 'react-scroll';
import {
  FcBusinessman,
  FcVoicePresentation,
  FcViewDetails,
} from 'react-icons/fc';

// ? ====================
// ?   INTERFACE
// ? ====================
interface DropDownNavModal {
  onDropdown: (state: boolean, location?: string) => void;
}
// * ====================
// *  React.FC
// * ====================
const DropDownNavModal: React.FC<DropDownNavModal> = ({ onDropdown }) => {
  return (
    <div className={styles.block__container}>
      <ul className={styles.nav__list}>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          <Link
            activeClass="active"
            to="description"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => onDropdown(false)}
          >
            <span>
              <FcBusinessman />
            </span>
            소개
          </Link>
        </li>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          <Link
            activeClass="active"
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => onDropdown(false)}
          >
            <span>
              <FcVoicePresentation />
            </span>
            후기
          </Link>
        </li>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          <Link
            activeClass="active"
            to="guide"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => onDropdown(false)}
          >
            <span>
              <FcViewDetails />
            </span>
            가이드
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropDownNavModal;
