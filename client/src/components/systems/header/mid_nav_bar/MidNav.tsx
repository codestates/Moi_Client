import React from 'react';
import styles from '../../../../styles/systems/header/Header.module.css';
import DropDownNavModal from '../dropdown_nav_modal/DropDownNavModal';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// ? ====================
// ?   INTERFACE
// ? ====================
interface MidNavProps {
  dropdown: boolean;
  onDropdown: (state: boolean, location?: string) => void;
  onScroll: (destination: string, name: string) => JSX.Element;
}

// * ====================
// *  React.FC
// * ====================
const MidNav: React.FC<MidNavProps> = ({ dropdown, onDropdown, onScroll }) => {
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
            {dropdown ? <DropDownNavModal onScroll={onScroll} /> : null}
          </li>
        </OutsideClickHandler>
        <li>
          <Link to="/template">이력서 작성하기</Link>
        </li>
        <li>
          <Link to="#">내이력서</Link>
        </li>
        <li>
          <Link to="#">문의하기</Link>
        </li>
      </ul>
    </>
  );
};

export default MidNav;
