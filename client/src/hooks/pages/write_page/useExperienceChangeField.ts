import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/workExperience/actions';
import {
  State,
  ExperienceItem,
} from '../../../modules/changeField/workExperience/types';

function useSkillsChangeField(): {
  addExperience: () => void;
  addWork: (index: number) => void;
  workExperience: ExperienceItem[];
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { workExperience } = useSelector(
    ({ workExperienceField }: { workExperienceField: State }) => ({
      workExperience: workExperienceField.workExperience,
    }),
  );

  // * VARIABLE & FUNCTIONS
  const addExperience = () => {
    dispatch(actions.addExperienceField());
  };

  const addWork = (index: number) => {
    dispatch(actions.addWorkField({ index }));
  };

  // const onChangeSkillField = <U, T>(index: U, location: T, value: T): void => {
  //   dispatch(
  //     actions.changeSkillField({ index: index, key: location, value: value }),
  //   );
  // };

  // const onChangeSkillFields = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ): void => {
  //   const { name, value } = event.target;
  //   const index = event.target.getAttribute('data-index');
  //   onChangeSkillField(index, name, value);
  // };

  // const onDeleteSkillFields = (index: number) => {
  //   dispatch(actions.deleteSkillField({ index: index }));
  // };

  return {
    addExperience,
    workExperience,
    addWork,
  };
}

export default useSkillsChangeField;
