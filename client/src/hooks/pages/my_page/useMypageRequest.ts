import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/get_mypage/actions';
import { State, ResumeData } from '../../../modules/get_mypage/types';

function useMypageRequest(): {
  list: ResumeData[];
  onMypageRequest: () => void;
} {
  const dispatch = useDispatch();
  const { list } = useSelector(
    ({ mypageRequestField }: { mypageRequestField: State }) => ({
      list: mypageRequestField.list,
    }),
  );
  const onMypageRequest = (): void => {
    dispatch(actions.mypageGetRequest());
  };
  return { onMypageRequest, list };
}

export default useMypageRequest;
