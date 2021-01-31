import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/post_ask/actions';
import { State } from '../../../modules/post_ask/types';

function useAskRequest(): {
  isMailSucssessed: boolean | null;
  onAskRequest: (
    username: string,
    email: string,
    title: string,
    desc: string,
  ) => void;
} {
  const dispatch = useDispatch();

  const { isMailSucssessed } = useSelector(
    ({ askRequestField }: { askRequestField: State }) => ({
      isMailSucssessed: askRequestField.isMailSucssessed,
    }),
  );

  const onAskRequest = (
    username: string,
    email: string,
    title: string,
    desc: string,
  ): void => {
    dispatch(actions.askPostRequest({ username, email, title, desc }));
  };
  return { onAskRequest, isMailSucssessed };
}
export default useAskRequest;
