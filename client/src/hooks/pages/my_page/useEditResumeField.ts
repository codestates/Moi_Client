import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
function useEditResumeField(): {
  editRequest: (resumeId: string) => void;
} {
  const dispatch = useDispatch();

  const editRequest = (resumeId: string) => {
    dispatch(actions.editResumeFieldRequest({ resumeId }));
  };
  return {
    editRequest,
  };
}
export default useEditResumeField;
