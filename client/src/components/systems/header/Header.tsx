import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import Buger from './responsive_buger/Buger';
import LeftLogo from './left_logo/LeftLogo';
import MidNav from './mid_nav_bar/MidNav';
import RightLoginButton from './right_login_button/RightLoginButton';
import styles from '../../../styles/systems/header/Header.module.css';
import LoginModal from '../header/login_modal/LoginModal';
import AuthCheckModal from '../modal/AuthCheckModal';

// ? ====================
// ?   INTERFACE
// ? ====================
interface HeaderProps {
  dropdown: boolean;
  onDropdown: (state: boolean) => void;
  bugerMenu: boolean;
  onBugerMenu: () => void;
  onScroll: (destination: string, name: string) => JSX.Element;
  loginModal: boolean;
  hadleLoginModal: () => void;
  requestGoogleAuthorizationCode: () => void;
  requestKakaoAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
  isLoggedIn: boolean;
  logout: boolean;
  requestSignOut: () => void;
  checkModal: boolean;
  type: string;
  onAuthCheckModal: (state: boolean, type: string) => void;
  onCloseModal: () => void;
  userDropdown: boolean;
  onUserDropdown: (state: boolean) => void;
  onWithdrawal: () => void;
}
// * ====================
// *  REACT.FC
// * ====================
const Header: React.FC<HeaderProps> = ({
  dropdown,
  onDropdown,
  bugerMenu,
  onBugerMenu,
  onScroll,
  loginModal,
  hadleLoginModal,
  requestGoogleAuthorizationCode,
  requestKakaoAuthorizationCode,
  requestGithubAuthorizationCode,
  isLoggedIn,
  logout,
  requestSignOut,
  checkModal,
  type,
  onAuthCheckModal,
  onCloseModal,
  userDropdown,
  onUserDropdown,
  onWithdrawal,
}) => {
  // * ====================
  // *  RESPONSIVE
  // * ====================
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });
  return (
    <>
      {isPc && (
        //* PC header_nav_bar
        <>
          <div className={styles.block_container}>
            <LeftLogo />
            <MidNav
              dropdown={dropdown}
              onDropdown={onDropdown}
              onScroll={onScroll}
              onAuthCheckModal={onAuthCheckModal}
            />
            <RightLoginButton
              hadleLoginModal={hadleLoginModal}
              isLoggedIn={isLoggedIn}
              logout={logout}
              requestSignOut={requestSignOut}
              userDropdown={userDropdown}
              onUserDropdown={onUserDropdown}
              onWithdrawal={onWithdrawal}
            />
          </div>
          {loginModal && (
            <LoginModal
              hadleLoginModal={hadleLoginModal}
              requestGoogleAuthorizationCode={requestGoogleAuthorizationCode}
              requestKakaoAuthorizationCode={requestKakaoAuthorizationCode}
              requestGithubAuthorizationCode={requestGithubAuthorizationCode}
            />
          )}
          {checkModal && (
            <AuthCheckModal type={type} onCloseModal={onCloseModal} />
          )}
        </>
      )}
      {isMobile && (
        //* Mobile header_hambuger_menu
        <>
          <div className={styles.response__logo__block}>
            <Link to="/">모두의 이력서</Link>
            <button
              className={styles.buger__toggle__button}
              type="button"
              onClick={onBugerMenu}
            >
              <HiMenu />
            </button>
          </div>
          <Buger
            bugerMenu={bugerMenu}
            onBugerMenu={onBugerMenu}
            hadleLoginModal={hadleLoginModal}
            isLoggedIn={isLoggedIn}
            logout={logout}
            requestSignOut={requestSignOut}
            onWithdrawal={onWithdrawal}
            onAuthCheckModal={onAuthCheckModal}
          />
          {loginModal && (
            <LoginModal
              hadleLoginModal={hadleLoginModal}
              requestGoogleAuthorizationCode={requestGoogleAuthorizationCode}
              requestKakaoAuthorizationCode={requestKakaoAuthorizationCode}
              requestGithubAuthorizationCode={requestGithubAuthorizationCode}
            />
          )}
          {checkModal && (
            <AuthCheckModal type={type} onCloseModal={onCloseModal} />
          )}
        </>
      )}
    </>
  );
};

export default Header;
