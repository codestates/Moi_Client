import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function useAuthCheckModal(): {
  checkModal: boolean;
  type: string;
  onAuthCheckModal: (state: boolean, type: string) => void;
  onCloseModal: () => void;
} {
  const [checkModal, setCheckModal] = useState<boolean>(false);
  const [type, setType] = useState<string>('');
  const history = useHistory();

  const onAuthCheckModal = (state: boolean, type: string) => {
    if (localStorage.getItem('current_user')) {
      if (type === 'write') {
        history.push('/template');
      } else {
        history.push('/mypage');
      }
    } else {
      setType(type);
      setCheckModal(state);
    }
  };

  const onCloseModal = () => {
    setCheckModal(false);
  };

  return { checkModal, type, onAuthCheckModal, onCloseModal };
}

export default useAuthCheckModal;
