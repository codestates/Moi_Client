import React from 'react';
import styles from '../../../../styles/systems/header/DropDown.module.css';

const DropDownNavModal: React.FC = () => {
  return (
    <div className={styles.block__container}>
      <ul className={styles.nav__list}>
        <li>소개</li>
        <li>예시</li>
        <li>템플릿</li>
      </ul>
    </div>
  );
};

export default DropDownNavModal;
