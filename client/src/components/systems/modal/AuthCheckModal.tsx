import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/systems/modal/AuthCheck.module.css';

interface AuthCheckModal {
  onCloseModal: () => void;
}

const AuthCheckModal: React.FC<AuthCheckModal> = ({ onCloseModal }) => {
  return (
    <div className={styles.full__screen}>
      <div className={styles.white__box}>
        <div className={styles.wanring__message__block}>
          <p className={styles.wanring__message}>비회원으로 작성 시 이력서는</p>
          <p className={styles.wanring__message}>
            <span>저장</span>되지 않습니다.
          </p>
        </div>
        <ul className={styles.button__block}>
          <li className={styles.login__button__area}>
            <button className={styles.login__button} onClick={onCloseModal}>
              로그인
            </button>
          </li>
          <li className={styles.continue__button__area}>
            <Link
              to="/template"
              className={styles.continue__button}
              onClick={() => onCloseModal()}
            >
              비회원으로 계속
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthCheckModal;
