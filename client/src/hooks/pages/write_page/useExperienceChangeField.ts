import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/workExperience/actions';
import {
  State,
  ExperienceItem,
} from '../../../modules/changeField/workExperience/types';

function useSkillsChangeField(): {
  addExperience: () => void;
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

  const changeExperienceField = <U, T>(
    index: U,
    location: T,
    value: T,
  ): void => {
    dispatch(
      actions.changeExperienceField({
        index: index,
        key: location,
        value: value,
      }),
    );
  };

  const changeExperienceFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const index = event.target.getAttribute('data-index');
    console.log(index, name, value);

    changeExperienceField(index, name, value);
  };

  const addWork = (index: number) => {
    dispatch(actions.addWorkField({ index }));
  };

  // const onDeleteSkillFields = (index: number) => {
  //   dispatch(actions.deleteSkillField({ index: index }));
  // };

  return {
    addExperience,
    workExperience,
    addWork,
    changeExperienceFields,
  };
}

export default useSkillsChangeField;
