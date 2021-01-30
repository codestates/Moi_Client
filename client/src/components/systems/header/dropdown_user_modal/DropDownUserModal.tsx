import React from 'react';
import styles from '../../../../styles/systems/header/DropDown.module.css';
import { BiPowerOff, BiRun } from 'react-icons/bi';

interface DropDownUserModalProps {
  requestSignOut: () => void;
  onWithdrawal: () => void;
}

const DropDownUserModal: React.FC<DropDownUserModalProps> = ({
  requestSignOut,
  onWithdrawal,
}) => {
  return (
    <div className={styles.box__container}>
      <ul className={styles.box__list__block}>
        <li>
          <button onClick={requestSignOut}>
            <BiPowerOff className={styles.button__icon} />
            로그아웃
          </button>
        </li>
        <li>
          <button onClick={onWithdrawal}>
            <BiRun className={styles.button__icon} />
            회원탈퇴
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropDownUserModal;
