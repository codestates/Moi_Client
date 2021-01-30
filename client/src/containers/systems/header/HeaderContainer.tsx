import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Header from '../../../components/systems/header/Header';
import { Link } from 'react-scroll';

//* REACT_ICONS
import {
  FcBusinessman,
  FcVoicePresentation,
  FcViewDetails,
} from 'react-icons/fc';

// * ====================
// *   IMPORT_CUSTOM_HOOKS
// * ====================
import useDropdown from '../../../hooks/systems/header/useDropdown';
import useBugerMenu from '../../../hooks/systems/header/useBugerMenu';
import useLoginModal from '../../../hooks/systems/modal/useLoginModal';
import useRequestAuthorizationCode from '../../../hooks/systems/auth/useRequestAuthorizationCode';
import useGoogleLogin from '../../../hooks/systems/auth/socialLogin/useGoogleLogin';
import useKakaoLogin from '../../../hooks/systems/auth/socialLogin/useKakaoLogin';
import useGithubLogin from '../../../hooks/systems/auth/socialLogin/useGithubLogin';
import useSignOut from '../../../hooks/systems/auth/useSignOut';
import useAuthCheckModal from '../../../hooks/systems/modal/useAuthCheckModal';
import useUserDropDown from '../../../hooks/systems/header/useUserDropDown';
import useWithdrawal from '../../../hooks/systems/auth/useWithdrawal';

const HeaderContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const [thumbnail, setThumbnail] = useState<string | null>('');

  // * ====================
  // *   CUSTOM_HOOKS
  // * ====================
  const { dropdown, onDropdown } = useDropdown();
  const { bugerMenu, onBugerMenu } = useBugerMenu();
  const { loginModal, hadleLoginModal } = useLoginModal();
  const {
    requestGoogleAuthorizationCode,
    requestKakaoAuthorizationCode,
    requestGithubAuthorizationCode,
  } = useRequestAuthorizationCode();
  const { googleUser, googleLogin } = useGoogleLogin();
  const { kakaoUser, kakaoLogin } = useKakaoLogin();
  const { githubUser, githubLogin } = useGithubLogin();
  const { logout, requestSignOut } = useSignOut();
  const {
    checkModal,
    type,
    onAuthCheckModal,
    onCloseModal,
  } = useAuthCheckModal();
  const { userDropdown, onUserDropdown } = useUserDropDown();
  const { onWithdrawal } = useWithdrawal();

  // * ====================
  // *   FUNCTIONS
  // * ====================
  const onScroll = (destination: string, name: string) => {
    const description = <FcBusinessman />;
    const review = <FcVoicePresentation />;
    const guide = <FcViewDetails />;

    return (
      <Link
        activeClass="active"
        to={destination}
        spy={true}
        smooth={true}
        duration={500}
        onClick={() => onDropdown(false)}
      >
        {destination === 'description'
          ? description
          : destination === 'review'
          ? review
          : destination === 'guide'
          ? guide
          : null}
        {name}
      </Link>
    );
  };

  const onSocialLogin = () => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    if (authorizationCode && state) {
      const loginState = state.split('/');
      switch (loginState[0]) {
        case 'google':
          googleLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        case 'kakao':
          kakaoLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        case 'github':
          githubLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (loginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    if (googleUser.id || kakaoUser.id || githubUser.id) {
      setIsLoggedIn(true);
    }
  }, [loginModal, googleUser, kakaoUser, githubUser, logout]);

  useEffect(() => {
    onSocialLogin();
    if (localStorage.getItem('current_user')) {
      setIsLoggedIn(true);
    }
  }, []);
  // * ====================
  // *   RENDER
  // * ====================
  return (
    <>
      <Header
        dropdown={dropdown}
        onDropdown={onDropdown}
        bugerMenu={bugerMenu}
        onBugerMenu={onBugerMenu}
        onScroll={onScroll}
        loginModal={loginModal}
        hadleLoginModal={hadleLoginModal}
        requestGoogleAuthorizationCode={requestGoogleAuthorizationCode}
        requestKakaoAuthorizationCode={requestKakaoAuthorizationCode}
        requestGithubAuthorizationCode={requestGithubAuthorizationCode}
        isLoggedIn={isLoggedIn}
        logout={logout}
        requestSignOut={requestSignOut}
        checkModal={checkModal}
        type={type}
        onAuthCheckModal={onAuthCheckModal}
        onCloseModal={onCloseModal}
        userDropdown={userDropdown}
        onUserDropdown={onUserDropdown}
        onWithdrawal={onWithdrawal}
      />
    </>
  );
};

export default withRouter(HeaderContainer);
