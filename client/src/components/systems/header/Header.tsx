import React from 'react';
import LeftLogo from './left_logo/LeftLogo';
import MidNav from './mid_nav_bar/MidNav';
import RightLoginButton from './right_login_button/RightLoginButton';
import styles from '../../../styles/systems/header/Header.module.css';

// ? ====================
// ?   INTERFACE
// ? ====================
interface HeaderProps {
  dropdown: boolean;
  onDropdown: (state: boolean) => void;
}

// * ====================
// *  React.FC
// * ====================
const Header: React.FC<HeaderProps> = ({ dropdown, onDropdown }) => {
  return (
    <div className={styles.block_container}>
      <LeftLogo />
      <MidNav dropdown={dropdown} onDropdown={onDropdown} />
      <RightLoginButton />
    </div>
  );
};

export default Header;
