import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
import { SaveEditResumeState } from '../../../modules/asyncResumeField/types';

function useDeleteResumeField(): {
  isDeleted: boolean | null;
  onDeleteResume: (resumeId: string) => void;
} {
  const dispatch = useDispatch();

  const { isDeleted } = useSelector(
    ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
      isDeleted: asyncResumeField.deleteResume.isDeleted,
    }),
  );

  const onDeleteResume = (resumeId: string) => {
    dispatch(actions.deleteResumeFieldRequest({ resumeId }));
  };

  return { onDeleteResume, isDeleted };
}

export default useDeleteResumeField;
