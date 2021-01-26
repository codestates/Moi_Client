import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook, SiGithub } from 'react-icons/si';
import headerLogo from '../../../../public/headerLogo.png';
import styles from '../../../../styles/systems/header/LoginModal.module.css';

interface LoginModal {
  onLoginModal: (state: boolean) => void;
  requestGoogleAuthorizationCode: () => void;
  requestFacebookAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
}

const LoginModal: React.FC<LoginModal> = ({
  onLoginModal,
  requestGoogleAuthorizationCode,
  requestFacebookAuthorizationCode,
  requestGithubAuthorizationCode,
}) => {
  return (
    <div className={styles.full__screen}>
      <div className={styles.white__box}>
        <AiOutlineClose
          className={styles.close__button}
          onClick={() => onLoginModal(false)}
        />
        <div className={styles.logo__block}>
          <img src={headerLogo} alt="logo" />
        </div>
        <ul className={styles.button__block}>
          <li>
            <button
              className={styles.google__button}
              onClick={requestGoogleAuthorizationCode}
            >
              <FcGoogle className={styles.login__logo} />
              Google로 로그인
            </button>
          </li>
          <li>
            <button
              className={styles.facebook__button}
              onClick={requestFacebookAuthorizationCode}
            >
              <SiFacebook className={styles.login__logo} />
              Facebook으로 로그인
            </button>
          </li>
          <li>
            <button
              className={styles.github__button}
              onClick={requestGithubAuthorizationCode}
            >
              <SiGithub className={styles.login__logo} />
              Github로 로그인
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginModal;
