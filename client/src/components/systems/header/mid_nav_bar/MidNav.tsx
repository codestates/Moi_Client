import React from 'react';
import styles from '../../../../styles/systems/header/Header.module.css';
import DropDownNavModal from '../dropdown_nav_modal/DropDownNavModal';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiChevronDown } from 'react-icons/bi';

// ? ====================
// ?   INTERFACE
// ? ====================
interface MidNavProps {
  dropdown: boolean;
  // eslint-disable-next-line no-unused-vars
  onDropdown: (state: boolean, location?: string) => void;
}

// * ====================
// *  React.FC
// * ====================
const MidNav: React.FC<MidNavProps> = ({ dropdown, onDropdown }) => {
  return (
    <>
      <ul className={styles.middle_nav_bar}>
        <OutsideClickHandler
          onOutsideClick={() => {
            onDropdown(false);
          }}
        >
          <li className={styles.middle__nav__list__strong}>
            <button
              className={styles.middle__nav__bar__overView__button}
              onClick={() => onDropdown(true, 'overView')}
            >
              Overview
              <BiChevronDown />
            </button>
            {dropdown ? <DropDownNavModal onDropdown={onDropdown} /> : null}
          </li>
        </OutsideClickHandler>
        <li>
          <a href="#">이력서 작성하기</a>
        </li>
        <li>
          <a href="#">내이력서</a>
        </li>
        <li>
          <a href="#">문의하기</a>
        </li>
      </ul>
    </>
  );
};

export default MidNav;
