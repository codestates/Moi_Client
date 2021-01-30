import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/socialLoginField/user/actions';
import { CheckState } from '../../../modules/socialLoginField/user/types';

function useSignOut(): {
  logout: boolean;
  requestSignOut: () => void;
} {
  const dispatch = useDispatch();
  const { logout } = useSelector(
    ({ checkUserField }: { checkUserField: CheckState }) => ({
      logout: checkUserField.logout,
    }),
  );
  const requestSignOut = () => {
    dispatch(actions.logoutUser({ state: true }));
  };

  return {
    requestSignOut,
    logout,
  };
}

export default useSignOut;
