import React from 'react';
import styles from '../../../../styles/systems/header/Header.module.css';

interface RightLoginButtonProps {
  onLoginModal: (state: boolean) => void;
}

const RightLoginButton: React.FC<RightLoginButtonProps> = ({
  onLoginModal,
}) => {
  return (
    <button
      className={styles.right_login_button}
      onClick={() => onLoginModal(true)}
    >
      로그인
    </button>
  );
};

export default RightLoginButton;
