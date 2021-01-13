import React from 'react';
import styles from '../../../../styles/systems/header/Header.module.css';

const MidNav: React.FC = () => {
  return (
    <ul className={styles.middle_nav_bar}>
      <li className={styles.middle__nav__list__strong}>
        <a href="#" className={styles.middle__nav__list__anchor}>
          Overview
        </a>
      </li>
      <li>
        <a href="#" className={styles.middle__nav__list__anchor}>
          이력서 작성하기
        </a>
      </li>
      <li>
        <a href="#" className={styles.middle__nav__list__anchor}>
          내이력서
        </a>
      </li>
      <li>
        <a href="#" className={styles.middle__nav__list__anchor}>
          문의하기
        </a>
      </li>
    </ul>
  );
};

export default MidNav;
