import React from 'react';
import styles from '../../../../styles/systems/header/DropDown.module.css';

// ? ====================
// ?   INTERFACE
// ? ====================
interface DropDownNavModal {
  onScroll: (destination: string, name: string) => JSX.Element;
}
// * ====================
// *  React.FC
// * ====================
const DropDownNavModal: React.FC<DropDownNavModal> = ({ onScroll }) => {
  return (
    <div className={styles.block__container}>
      <ul className={styles.nav__list}>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          {onScroll('description', '소개')}
        </li>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          {onScroll('review', '후기')}
        </li>
        <li>
          {/* // ? ONCLICK_SCROLL_EVENT_(react-scroll)*/}
          {onScroll('guide', '가이드')}
        </li>
      </ul>
    </div>
  );
};

export default DropDownNavModal;
