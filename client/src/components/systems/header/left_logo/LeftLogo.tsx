import React from 'react';
import headerLogo from '../../../../public/headerLogo.png';
import styles from '../../../../styles/systems/header/Header.module.css';

const LeftLogo: React.FC = () => {
  return (
    <a href="#" className={styles.left_side_anchor}>
      <img
        className={styles.left_side_logo}
        src={headerLogo}
        alt="service_logo"
      />
    </a>
  );
};

export default LeftLogo;
