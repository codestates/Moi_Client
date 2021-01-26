import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/socialLoginField/github/actions';
import { State } from '../../../../modules/socialLoginField/github/types';

function useGithubLogin(): {
  githubUser: { id: string | null; email: string | null };
  githubLogin: (authorizationCode: string) => void;
} {
  const dispatch = useDispatch();
  const { githubUser } = useSelector(
    ({ githubLoginField }: { githubLoginField: State }) => ({
      githubUser: {
        id: githubLoginField.currentUser.id,
        email: githubLoginField.currentUser.email,
      },
    }),
  );

  const githubLogin = (authorizationCode: string): void => {
    dispatch(actions.githubLoginRequest({ authorizationCode }));
  };

  return { githubUser, githubLogin };
}

export default useGithubLogin;
