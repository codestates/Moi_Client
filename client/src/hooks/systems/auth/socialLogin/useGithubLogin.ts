import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/github/actions';
import { State } from '../../../../modules/socialLoginField/github/types';

function useGithubLogin(): {
  currentUser: { id: string | null; email: string | null };
  githubLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    ({ githubLoginField }: { githubLoginField: State }) => ({
      currentUser: {
        id: githubLoginField.currentUser.id,
        email: githubLoginField.currentUser.email,
      },
    }),
  );

  const githubLogin = (authorizationCode: string): void => {
    dispatch(actions.githubLoginRequest({ authorizationCode }));
  };

  return { currentUser, githubLogin };
}

export default useGithubLogin;
