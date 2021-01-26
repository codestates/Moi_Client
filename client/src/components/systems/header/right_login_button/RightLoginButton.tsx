import React from 'react';
import styles from '../../../../styles/systems/header/Header.module.css';

interface RightLoginButtonProps {
  onLoginModal: (state: boolean) => void;
  isLoggedIn: boolean;
  requestSignOut: () => void;
}

const RightLoginButton: React.FC<RightLoginButtonProps> = ({
  onLoginModal,
  isLoggedIn,
  requestSignOut,
}) => {
  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <button className={styles.right_login_button} onClick={requestSignOut}>
          로그아웃
        </button>
      ) : (
        <button
          className={styles.right_login_button}
          onClick={() => onLoginModal(true)}
        >
          로그인
        </button>
      )}
    </>
  );
};

export default RightLoginButton;

/**
 *   return  (
    <button
      className={styles.right_login_button}
      onClick={() => onLoginModal(true)}
    >
      로그인
    </button>
  );
 */
