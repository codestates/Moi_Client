import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/ask/actions';
import { State } from '../../../modules/changeField/ask/types';

function useAskChangeField(): {
  username: string;
  email: string;
  title: string;
  desc: string;
  onChangeAskFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClicks: (event: React.MouseEvent<HTMLButtonElement>) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { username, email, title, desc } = useSelector(
    ({ askField }: { askField: State }) => ({
      username: askField.ask.username,
      email: askField.ask.email,
      title: askField.ask.title,
      desc: askField.ask.desc,
    }),
  );

  // * VARIABLE & FUNCTIONS

  const onChangeAskField = <T>(location: T, value: T): void => {
    dispatch(
      actions.changeAskField({
        key: location,
        value: value,
      }),
    );
  };

  const onClicks = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log(username, email, title, desc);
  };
  const onChangeAskFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    onChangeAskField<string>(name, value);
  };

  const onChangeTextAreas = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    onChangeAskField<string>(name, value);
  };

  return {
    username,
    email,
    title,
    desc,
    onChangeAskFields,
    onChangeTextAreas,
    onClicks,
  };
}

export default useAskChangeField;
