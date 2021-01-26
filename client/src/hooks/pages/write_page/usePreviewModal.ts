import { useState } from 'react';

function useLoadPreviewValues(): {
  onPreviewModal: () => void;
  preview: boolean;
} {
  const [preview, setPreview] = useState(false);

  const onPreviewModal = () => {
    setPreview(!preview);
  };
  return {
    onPreviewModal,
    preview,
  };
}

export default useLoadPreviewValues;
