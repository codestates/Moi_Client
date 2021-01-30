import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook, SiGithub } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import headerLogo from '../../../../public/headerLogo.png';
import styles from '../../../../styles/systems/header/LoginModal.module.css';

interface LoginModal {
  hadleLoginModal: () => void;
  requestGoogleAuthorizationCode: () => void;
  requestKakaoAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
}

const LoginModal: React.FC<LoginModal> = ({
  hadleLoginModal,
  requestGoogleAuthorizationCode,
  requestKakaoAuthorizationCode,
  requestGithubAuthorizationCode,
}) => {
  return (
    <div className={styles.full__screen}>
      <div className={styles.white__box}>
        <AiOutlineClose
          className={styles.close__button}
          onClick={() => hadleLoginModal()}
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
              className={styles.kakao__button}
              onClick={requestKakaoAuthorizationCode}
            >
              <RiKakaoTalkFill className={styles.login__logo} />
              Kakao로 로그인
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
