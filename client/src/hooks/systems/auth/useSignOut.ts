import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../../modules/socialLoginField/user/actions';

function useSignOut(): {
  logout: boolean;
  requestSignOut: () => void;
} {
  const [logout, setLogout] = useState<boolean>(false);

  const dispatch = useDispatch();

  const requestSignOut = () => {
    setLogout(true);
    dispatch(actions.logoutUser());
  };
  return {
    requestSignOut,
    logout,
  };
}

export default useSignOut;
