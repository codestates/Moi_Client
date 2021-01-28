import { useDispatch } from 'react-redux';
import * as actions from '../../../modules/config/actions';

function useSelectTemplate(): {
  selectTemplate: (templateCode: number) => void;
} {
  const dispatch = useDispatch();

  const selectTemplate = (templateCode: number) => {
    dispatch(actions.selectTemplate({ value: templateCode }));
    localStorage.removeItem('edit_field');
  };
  return {
    selectTemplate,
  };
}

export default useSelectTemplate;
