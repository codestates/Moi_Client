import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/facebook/actions';
import { State } from '../../../../modules/socialLoginField/facebook/types';

function useFacebookLogin(): {
  facebookUser: { id: string | null; email: string | null };
  facebookLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { facebookUser } = useSelector(
    ({ facebookLoginField }: { facebookLoginField: State }) => ({
      facebookUser: {
        id: facebookLoginField.currentUser.id,
        email: facebookLoginField.currentUser.email,
      },
    }),
  );

  const facebookLogin = (authorizationCode: string): void => {
    dispatch(actions.facebookLoginRequest({ authorizationCode }));
  };

  return { facebookUser, facebookLogin };
}

export default useFacebookLogin;
