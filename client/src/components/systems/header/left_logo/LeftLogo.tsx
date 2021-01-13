import React from 'react';
import headerLogo from '../../../../public/headerLogo.png';
import styles from '../../../../styles/systems/header/Header.module.css';

// * ====================
// *  React.FC
// * ====================
const LeftLogo: React.FC = () => {
  return (
    <a href="#" className={styles.left_side_anchor}>
      <img src={headerLogo} alt="service_logo" />
    </a>
  );
};

export default LeftLogo;
