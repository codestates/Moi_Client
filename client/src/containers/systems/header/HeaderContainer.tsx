import React, { useEffect } from 'react';
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
import useLoginModal from '../../../hooks/systems/header/useLoginModal';
import useRequestAuthorizationCode from '../../../hooks/systems/auth/useRequestAuthorizationCode';
import useGoogleLogin from '../../../hooks/systems/auth/socialLogin/useGoogleLogin';
import useFacebookLogin from '../../../hooks/systems/auth/socialLogin/useFacebookLogin';
import useGithubLogin from '../../../hooks/systems/auth/socialLogin/useGithubLogin';
import useSignOut from '../../../hooks/systems/auth/useSignOut';

const HeaderContainer: React.FC<RouteComponentProps> = ({ history }) => {
  // * ====================
  // *   CUSTOM_HOOKS
  // * ====================
  const { dropdown, onDropdown } = useDropdown();
  const { bugerMenu, onBugerMenu } = useBugerMenu();
  const { modal, onLoginModal } = useLoginModal();
  const {
    requestGoogleAuthorizationCode,
    requestFacebookAuthorizationCode,
    requestGithubAuthorizationCode,
  } = useRequestAuthorizationCode();
  const google = useGoogleLogin();
  const facebook = useFacebookLogin();
  const github = useGithubLogin();
  const { requestSignOut } = useSignOut();

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
      console.log(loginState);
      switch (loginState[0]) {
        case 'google':
          google.googleLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        case 'kakao':
          facebook.facebookLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        case 'github':
          github.githubLogin(authorizationCode);
          history.push(`/${loginState[1]}`);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [
    modal,
    useGoogleLogin().currentUser,
    useFacebookLogin().currentUser,
    useGithubLogin().currentUser,
  ]);

  useEffect(() => {
    onSocialLogin();
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
        modal={modal}
        onLoginModal={onLoginModal}
        requestGoogleAuthorizationCode={requestGoogleAuthorizationCode}
        requestFacebookAuthorizationCode={requestFacebookAuthorizationCode}
        requestGithubAuthorizationCode={requestGithubAuthorizationCode}
        isLoggedIn={Boolean(localStorage.getItem('isLoggedIn'))}
        requestSignOut={requestSignOut}
      />
    </>
  );
};

export default withRouter(HeaderContainer);
