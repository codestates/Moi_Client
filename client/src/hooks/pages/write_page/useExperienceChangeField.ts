import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../modules/changeField/workExperience/actions';
import {
  ExperienceState,
  ExperienceItem,
} from '../../../modules/changeField/workExperience/types';

function useSkillsChangeField(): {
  addExperience: () => void;
  changeExperienceFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeJobDescriptionFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  addJobDescription: (index: number) => void;
  workExperience: ExperienceItem[];
  onDeleteExperienceFields: (index: number) => void;
  onDeleteJobDescFields: (
    experienceIndex: number,
    jobDescIndex: number,
  ) => void;
  onCheckInOffice: (index: number) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { workExperience } = useSelector(
    ({ workExperienceField }: { workExperienceField: ExperienceState }) => ({
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
    changeExperienceField(index, name, value);
  };

  const addJobDescription = (index: number) => {
    dispatch(actions.addJobDescField({ index }));
  };

  const changeJobDescriptionField = <T, U, V>(
    experienceIndex: T,
    descIndex: U,
    value: V,
  ): void => {
    dispatch(
      actions.changeJobDescField({
        experienceIndex,
        descIndex,
        value: value,
      }),
    );
  };
  const changeJobDescriptionFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    const experienceIndex = event.target.getAttribute('data-experience-index');
    const jobIndex = event.target.getAttribute('data-job-index');

    changeJobDescriptionField(experienceIndex, jobIndex, value);
  };

  const onDeleteExperienceFields = (index: number) => {
    dispatch(actions.deleteExperienceField({ index: index }));
  };

  const onDeleteJobDescFields = (
    experienceIndex: number,
    jobDescIndex: number,
  ) => {
    dispatch(
      actions.deleteJobDescField({
        experienceIndex: experienceIndex,
        jobDescIndex: jobDescIndex,
      }),
    );
  };

  const onCheckInOffice = (index: number) => {
    const currentCheckBoxState = workExperience[index].inOffice;
    dispatch(
      actions.checkInOffice({
        experienceIndex: index,
        state: !currentCheckBoxState,
      }),
    );
  };

  return {
    addExperience,
    workExperience,
    addJobDescription,
    changeExperienceFields,
    changeJobDescriptionFields,
    onDeleteExperienceFields,
    onDeleteJobDescFields,
    onCheckInOffice,
  };
}

export default useSkillsChangeField;
