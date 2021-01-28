import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/info/actions';
import { InfoState } from '../../../modules/changeField/info/types';

function useChangeInfoField(): {
  username: string;
  profile: string;
  address: string;
  phone: string;
  email: string;
  title: string;
  onChangeFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
} {
  const dispatch = useDispatch();
  const { username, title, profile, address, phone, email } = useSelector(
    ({ infoField }: { infoField: InfoState }) => ({
      title: infoField.info.title,
      username: infoField.info.username,
      profile: infoField.info.profile,
      address: infoField.info.contact.address,
      phone: infoField.info.contact.phone,
      email: infoField.info.contact.email,
    }),
  );

  const onChangeField = <T>(location: T, value: T): void => {
    dispatch(actions.changeField({ key: location, value: value }));
  };

  const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    onChangeField<string>(name, value);
  };
  const onChangeTextAreas = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ): void => {
    const { name, value } = event.target;
    onChangeField<string>(name, value);
  };
  return {
    username,
    profile,
    address,
    phone,
    title,
    email,
    onChangeFields,
    onChangeTextAreas,
  };
}

export default useChangeInfoField;
