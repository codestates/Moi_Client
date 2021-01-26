function useRequestAuthorizationCode(): {
  requestGoogleAuthorizationCode: () => void;
  requestFacebookAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
} {
  const requestGoogleAuthorizationCode = () => {
    const clientId =
      '946279117194-6qgcrqmfmta1ouerpdbnksddp7uta7d3.apps.googleusercontent.com';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=code&scope=email+profile&state=google${location.pathname}&access_type=offline`;
    window.location.href = url;
  };
  const requestFacebookAuthorizationCode = () => {
    const clientId = '6de2889046d6e55e51859728f8c18487';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=code&state=kakao${location.pathname}`;
    window.location.href = url;
  };

  const requestGithubAuthorizationCode = () => {
    const clientId = '5909eb978129b3e66144';
    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}&state=github${location.pathname}&redirect_uri=http://localhost:3000`;
    window.location.href = url;
  };

  return {
    requestGoogleAuthorizationCode,
    requestFacebookAuthorizationCode,
    requestGithubAuthorizationCode,
  };
}

export default useRequestAuthorizationCode;
