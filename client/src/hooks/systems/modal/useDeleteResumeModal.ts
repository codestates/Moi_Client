import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/config/actions';
import { ConfigState } from '../../../modules/config/types';

function useDeleteResumeModal(): {
  deleteModal: {
    modal: boolean;
    resumeId: string;
    title: string | null;
  };
  onDeleteResumeModal: (resumeId: string | null, title: string | null) => void;
} {
  const dispatch = useDispatch();

  const { deleteModal } = useSelector(
    ({ config }: { config: ConfigState }) => ({
      deleteModal: {
        modal: config.modal.deleteModal.modal,
        resumeId: config.modal.deleteModal.resumeId,
        title: config.modal.deleteModal.title,
      },
    }),
  );

  const onDeleteResumeModal = (
    resumeId: string | null,
    title: string | null,
  ) => {
    const state = !deleteModal.modal;
    dispatch(actions.onDeleteModal({ state, resumeId, title }));
  };

  return { deleteModal, onDeleteResumeModal };
}

export default useDeleteResumeModal;
