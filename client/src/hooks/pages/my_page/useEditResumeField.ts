import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../modules/asyncResumeField/actions';
function useEditResumeField(): {
  editRequest: (resumeId: string) => void;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  handleMouseLeave: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
} {
  const dispatch = useDispatch();

  const editRequest = (resumeId: string) => {
    dispatch(actions.editResumeFieldRequest({ resumeId }));
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    console.log('enter');
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    console.log('leave');
  };

  return {
    editRequest,
    handleMouseEnter,
    handleMouseLeave,
  };
}
export default useEditResumeField;
