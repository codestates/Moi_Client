import { useDispatch } from 'react-redux';
import useSignOut from './useSignOut';
import * as actions from '../../../modules/socialLoginField/user/actions';

function useWithdrawal(): {
  onWithdrawal: () => void;
} {
  const dispatch = useDispatch();
  const { requestSignOut } = useSignOut();
  const onWithdrawal = () => {
    // dispatch(actions.logoutUser());
    requestSignOut();
    dispatch(actions.withdrawalUser());
  };

  return { onWithdrawal };
}

export default useWithdrawal;
