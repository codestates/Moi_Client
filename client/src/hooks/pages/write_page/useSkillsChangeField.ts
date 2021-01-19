import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/skills/actions';
import { State, SkillItem } from '../../../modules/changeField/skills/types';

function useSkillsChangeField(): {
  addSkill: () => void;
  skills: SkillItem[];
  onChangeSkillFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteSkillFields: (index: number) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { skills } = useSelector(({ skillsField }: { skillsField: State }) => ({
    skills: skillsField.skills,
  }));

  // * VARIABLE & FUNCTIONS
  const addSkill = () => {
    dispatch(actions.addSkillField(''));
  };

  const onChangeSkillField = <U, T>(index: U, location: T, value: T): void => {
    dispatch(
      actions.changeSkillField({ index: index, key: location, value: value }),
    );
  };

  const onChangeSkillFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const index = event.target.getAttribute('data-index');
    onChangeSkillField(index, name, value);
  };

  const onDeleteSkillFields = (index: number) => {
    dispatch(actions.deleteSkillField({ index: index }));
  };

  return {
    addSkill,
    skills,
    onChangeSkillFields,
    onDeleteSkillFields,
  };
}

export default useSkillsChangeField;
