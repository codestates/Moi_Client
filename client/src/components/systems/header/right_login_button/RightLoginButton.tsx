import React from 'react';
import DropDownUserModal from '../dropdown_user_modal/DropDownUserModal';
import OutsideClickHandler from 'react-outside-click-handler';
import styles from '../../../../styles/systems/header/Header.module.css';
import { AiFillCaretDown } from 'react-icons/ai';
import { GiSwallow } from 'react-icons/gi';

interface RightLoginButtonProps {
  hadleLoginModal: () => void;
  isLoggedIn: boolean;
  logout: boolean;
  requestSignOut: () => void;
  userDropdown: boolean;
  onUserDropdown: (state: boolean) => void;
  onWithdrawal: () => void;
}

const RightLoginButton: React.FC<RightLoginButtonProps> = ({
  hadleLoginModal,
  isLoggedIn,
  logout,
  requestSignOut,
  userDropdown,
  onUserDropdown,
  onWithdrawal,
}) => {
  const userInfo = JSON.parse(localStorage.getItem('current_user') || '{}');
  return (
    <>
      {isLoggedIn && !logout ? (
        <>
          <OutsideClickHandler
            onOutsideClick={() => {
              onUserDropdown(false);
            }}
          >
            <div
              className={styles.right__toggle__button__block}
              onClick={() => onUserDropdown(!userDropdown)}
            >
              <div className={styles.right__toggle__image__block}>
                {userInfo.thumbnail ? (
                  <img src={userInfo.thumbnail} alt="profile" />
                ) : (
                  <GiSwallow />
                )}
              </div>
              <AiFillCaretDown />
              {userDropdown && (
                <DropDownUserModal
                  requestSignOut={requestSignOut}
                  onWithdrawal={onWithdrawal}
                />
              )}
            </div>
          </OutsideClickHandler>
        </>
      ) : (
        <button
          className={styles.right_login_button}
          onClick={() => hadleLoginModal()}
        >
          로그인
        </button>
      )}
    </>
  );
};

export default RightLoginButton;
