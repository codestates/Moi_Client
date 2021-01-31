import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as actions from '../../../modules/asyncResumeField/actions';
function useEditResumeField(): {
  editRequest: (resumeId: string) => void;
} {
  const dispatch = useDispatch();
  const history = useHistory();
  const editRequest = (resumeId: string) => {
    dispatch(actions.editResumeFieldRequest({ resumeId }));
    history.push('/write');
  };

  return {
    editRequest,
  };
}
export default useEditResumeField;
