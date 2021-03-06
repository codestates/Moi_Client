import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/socialLoginField/user/actions';
import { CheckState } from '../../../modules/socialLoginField/user/types';

function useSignOut(): {
  logout: boolean;
  requestSignOut: () => void;
} {
  const dispatch = useDispatch();
  const history = useHistory();
  const { logout } = useSelector(
    ({ checkUserField }: { checkUserField: CheckState }) => ({
      logout: checkUserField.logout,
    }),
  );
  const requestSignOut = () => {
    history.push('/');
    dispatch(actions.logoutUser({ state: true }));
  };

  return {
    requestSignOut,
    logout,
  };
}

export default useSignOut;
