import React from 'react';
import styles from '../../../../styles/systems/header/DropDown.module.css';

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
          <button type="button" onClick={() => onDropdown(false)}>
            소개
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onDropdown(false)}>
            후기
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onDropdown(false)}>
            가이드
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDownNavModal;
