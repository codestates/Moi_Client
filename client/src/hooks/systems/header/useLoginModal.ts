import { useState } from 'react';

function useLoginModal(): {
  modal: boolean;
  onLoginModal: (state: boolean) => void;
} {
  const [modal, setModal] = useState<boolean>(false);
  const onLoginModal = (state: boolean) => {
    setModal(state);
  };

  return {
    modal,
    onLoginModal,
  };
}

export default useLoginModal;
