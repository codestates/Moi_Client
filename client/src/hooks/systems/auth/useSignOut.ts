import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/socialLoginField/user/actions';

function useSignOut(): {
  logout: boolean;
  requestSignOut: () => void;
  changeLogoutState: () => void;
} {
  const [logout, setLogout] = useState<boolean>(false);

  const dispatch = useDispatch();

  const requestSignOut = () => {
    setLogout(true);
    dispatch(actions.logoutUser());
  };

  const changeLogoutState = () => {
    setLogout(false);
  };

  return {
    requestSignOut,
    changeLogoutState,
    logout,
  };
}

export default useSignOut;
