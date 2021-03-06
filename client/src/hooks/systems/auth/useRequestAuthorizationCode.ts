function useRequestAuthorizationCode(): {
  requestGoogleAuthorizationCode: () => void;
  requestKakaoAuthorizationCode: () => void;
  requestGithubAuthorizationCode: () => void;
} {
  const requestGoogleAuthorizationCode = () => {
    const clientId =
      '946279117194-6qgcrqmfmta1ouerpdbnksddp7uta7d3.apps.googleusercontent.com';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=https://www.everymoi.com&response_type=code&scope=email+profile&state=google${location.pathname}&access_type=offline`;
    window.location.href = url;
  };
  const requestKakaoAuthorizationCode = () => {
    const clientId = '6de2889046d6e55e51859728f8c18487';
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=https://www.everymoi.com&response_type=code&state=kakao${location.pathname}`;
    window.location.href = url;
  };

  const requestGithubAuthorizationCode = () => {
    const clientId = '5909eb978129b3e66144';
    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${clientId}&state=github${location.pathname}&redirect_uri=https://www.everymoi.com`;
    window.location.href = url;
  };

  return {
    requestGoogleAuthorizationCode,
    requestKakaoAuthorizationCode,
    requestGithubAuthorizationCode,
  };
}

export default useRequestAuthorizationCode;
