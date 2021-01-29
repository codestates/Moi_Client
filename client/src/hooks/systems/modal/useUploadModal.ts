import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/config/actions';
import { ConfigState } from '../../../modules/config/types';

function useLoginModal(): {
  uploadModal: boolean;
  onUploadModal: () => void;
} {
  const dispatch = useDispatch();
  const { uploadModal } = useSelector(
    ({ config }: { config: ConfigState }) => ({
      uploadModal: config.modal.uploadModal,
    }),
  );

  const onUploadModal = () => {
    dispatch(actions.onUploadModal({ state: !uploadModal }));
  };

  return {
    uploadModal,
    onUploadModal,
  };
}

export default useLoginModal;
