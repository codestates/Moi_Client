import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/google/actions';
import { State } from '../../../../modules/socialLoginField/google/types';

function useGoogleLogin(): {
  currentUser: { id: string | null; email: string | null };
  googleLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    ({ googleLoginField }: { googleLoginField: State }) => ({
      currentUser: {
        id: googleLoginField.currentUser.id,
        email: googleLoginField.currentUser.email,
      },
    }),
  );

  const googleLogin = (authorizationCode: string): void => {
    dispatch(actions.googleLoginRequest({ authorizationCode }));
  };

  return { currentUser, googleLogin };
}

export default useGoogleLogin;
