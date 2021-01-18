import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/info/actions';
import { State } from '../../../modules/changeField/info/types';

function useInfoChangeField(): {
  username: string;
  address: string;
  facebook: string;
  onChangeField: <T>(location: T, value: T) => void;
  onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const dispatch = useDispatch();
  const { username, address, facebook } = useSelector(
    ({ field }: { field: State }) => ({
      username: field.info.username,
      address: field.info.contact.address,
      facebook: field.info.contact.link.facebook,
    }),
  );

  const onChangeField = <T>(location: T, value: T): void => {
    dispatch(actions.changeField({ key: location, value: value }));
  };

  const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    onChangeField<string>(name, value);
  };
  return {
    username,
    address,
    facebook,
    onChangeField,
    onChangeFields,
  };
}

export default useInfoChangeField;
