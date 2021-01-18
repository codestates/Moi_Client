import { addSkillField } from './../../../modules/changeField/skills/actions';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/skills/actions';
import { State } from '../../../modules/changeField/skills/types';

function useSkillsChangeField() {
  const dispatch = useDispatch();
  const addSkill = () => {
    dispatch(actions.addSkillField(''));
  };
  // const { username, address, facebook } = useSelector(
  //   ({ field }: { field: State }) => ({
  //     username: field.info.username,
  //     address: field.info.contact.address,
  //     facebook: field.info.contact.link.facebook,
  //   }),
  // );

  // const onChangeField = <T>(location: T, value: T): void => {
  //   dispatch(actions.changeField({ key: location, value: value }));
  // };

  // const onChangeFields = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   const { name, value } = event.target;
  //   onChangeField<string>(name, value);
  // };
  return {
    addSkill,
  };
}

export default useSkillsChangeField;
