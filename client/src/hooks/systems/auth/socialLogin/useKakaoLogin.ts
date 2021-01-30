import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/facebook/actions';
import { State } from '../../../../modules/socialLoginField/facebook/types';

function useKakaoLogin(): {
  kakaoUser: {
    id: string | null;
    email: string | null;
    thumbnail: string | null;
  };
  kakaoLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { kakaoUser } = useSelector(
    ({ kakaoLoginField }: { kakaoLoginField: State }) => ({
      kakaoUser: {
        id: kakaoLoginField.currentUser.id,
        email: kakaoLoginField.currentUser.email,
        thumbnail: kakaoLoginField.currentUser.thumbnail,
      },
    }),
  );

  const kakaoLogin = (authorizationCode: string): void => {
    dispatch(actions.kakaoLoginRequest({ authorizationCode }));
  };

  return { kakaoUser, kakaoLogin };
}

export default useKakaoLogin;
