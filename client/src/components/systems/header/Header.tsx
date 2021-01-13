import React from 'react';
import LeftLogo from './left_logo/LeftLogo';
import MidNav from './mid_nav_bar/MidNav';
import RightLoginButton from './right_login_button/RightLoginButton';
import styles from '../../../styles/systems/header/Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={styles.block_container}>
      <LeftLogo />
      <MidNav />
      <RightLoginButton />
    </div>
  );
};

export default Header;
