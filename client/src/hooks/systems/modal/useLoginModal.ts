import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/config/actions';
import { ConfigState } from '../../../modules/config/types';

function useLoginModal(): {
  loginModal: boolean;
  onLoginModal: () => void;
} {
  const dispatch = useDispatch();
  const { loginModal } = useSelector(({ config }: { config: ConfigState }) => ({
    loginModal: config.modal.loginModal,
  }));

  const onLoginModal = () => {
    dispatch(actions.onLoginModal({ state: !loginModal }));
  };

  return {
    loginModal,
    onLoginModal,
  };
}

export default useLoginModal;
