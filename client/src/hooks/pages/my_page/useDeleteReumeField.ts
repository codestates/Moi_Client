import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
import { SaveEditResumeState } from '../../../modules/asyncResumeField/types';
import useMypageRequest from './useMypageRequest';

function useDeleteResumeField(): {
  isDeleted: boolean;
  onDeleteResume: (resumeId: string) => void;
} {
  const dispatch = useDispatch();
  const { onMypageRequest } = useMypageRequest();

  const { isDeleted } = useSelector(
    ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
      isDeleted: asyncResumeField.deleteResume.isDeleted,
    }),
  );

  const onDeleteResume = (resumeId: string) => {
    dispatch(actions.deleteResumeFieldRequest({ resumeId }));
    onMypageRequest();
  };

  return { onDeleteResume, isDeleted };
}

export default useDeleteResumeField;
