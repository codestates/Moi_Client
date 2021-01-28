import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function useAuthCheckModal(): {
  checkModal: boolean;
  onAuthCheckModal: (state: boolean) => void;
  onCloseModal: () => void;
} {
  const [checkModal, setCheckModal] = useState<boolean>(false);
  const history = useHistory();

  const onAuthCheckModal = (state: boolean) => {
    if (localStorage.getItem('current_user')) {
      history.push('/template');
    } else {
      setCheckModal(state);
    }
  };

  const onCloseModal = () => {
    setCheckModal(false);
  };

  return { checkModal, onAuthCheckModal, onCloseModal };
}

export default useAuthCheckModal;
