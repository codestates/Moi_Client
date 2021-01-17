import React from 'react';
import headerLogo from '../../../../public/headerLogo.png';
import styles from '../../../../styles/systems/header/Header.module.css';
import { Link } from 'react-router-dom';

// * ====================
// *  React.FC
// * ====================
const LeftLogo: React.FC = () => {
  return (
    <Link to="/" className={styles.left_side_anchor}>
      <img src={headerLogo} alt="service_logo" />
    </Link>
  );
};

export default LeftLogo;
