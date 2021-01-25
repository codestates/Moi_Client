import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/facebook/actions';
import { State } from '../../../../modules/socialLoginField/facebook/types';

function useFacebookLogin(): {
  currentUser: { id: string | null; email: string | null };
  facebookLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    ({ facebookLoginField }: { facebookLoginField: State }) => ({
      currentUser: {
        id: facebookLoginField.currentUser.id,
        email: facebookLoginField.currentUser.email,
      },
    }),
  );

  const facebookLogin = (authorizationCode: string): void => {
    dispatch(actions.facebookLoginRequest({ authorizationCode }));
  };

  return { currentUser, facebookLogin };
}

export default useFacebookLogin;
