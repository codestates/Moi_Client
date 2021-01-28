import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { HiMenu } from 'react-icons/hi';

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
  modal: boolean;
  onLoginModal: (state: boolean) => void;
  requestGoogleAuthorizationCode: () => void;
  requestFacebookAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
  isLoggedIn: boolean;
  requestSignOut: () => void;
  checkModal: boolean;
  onAuthCheckModal: (state: boolean) => void;
  onCloseModal: () => void;
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
  modal,
  onLoginModal,
  requestGoogleAuthorizationCode,
  requestFacebookAuthorizationCode,
  requestGithubAuthorizationCode,
  isLoggedIn,
  requestSignOut,
  checkModal,
  onAuthCheckModal,
  onCloseModal,
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
              onLoginModal={onLoginModal}
              isLoggedIn={isLoggedIn}
              requestSignOut={requestSignOut}
            />
          </div>
          {modal && (
            <LoginModal
              onLoginModal={onLoginModal}
              requestGoogleAuthorizationCode={requestGoogleAuthorizationCode}
              requestFacebookAuthorizationCode={
                requestFacebookAuthorizationCode
              }
              requestGithubAuthorizationCode={requestGithubAuthorizationCode}
            />
          )}
          {checkModal && <AuthCheckModal onCloseModal={onCloseModal} />}
        </>
      )}
      {isMobile && (
        //* Mobile header_hambuger_menu
        <>
          <div className={styles.response__logo__block}>
            <a href="#">모두의 이력서</a>
            <button
              className={styles.buger__toggle__button}
              type="button"
              onClick={onBugerMenu}
            >
              <HiMenu />
            </button>
          </div>
          <Buger bugerMenu={bugerMenu} onBugerMenu={onBugerMenu} />
        </>
      )}
    </>
  );
};

export default Header;
