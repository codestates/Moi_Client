import { useState } from 'react';

function useSaveLocalModal(): {
  saveDoneModal: boolean;
  onSaveModal: () => void;
} {
  const [saveDoneModal, setSaveDoneModal] = useState(false);

  const onSaveModal = () => {
    setSaveDoneModal(!saveDoneModal);
    setTimeout(() => setSaveDoneModal(false), 3000);
  };

  return { saveDoneModal, onSaveModal };
}

export default useSaveLocalModal;
