import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/changeField/education/actions';
import {
  State,
  EducationItem,
} from '../../../../modules/changeField/education/types';

function useEducationsChangeField(): {
  addEducation: () => void;
  educations: EducationItem[];
  onChangeEducationFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEducationFields: (index: number) => void;
  onToggleEduDropdown: (index: number) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { educations } = useSelector(
    ({ educationsField }: { educationsField: State }) => ({
      educations: educationsField.educations,
    }),
  );

  // * VARIABLE & FUNCTIONS
  const addEducation = () => {
    dispatch(actions.addEducationField());
  };

  const onChangeEducationField = <U, T>(
    index: U,
    location: T,
    value: T,
  ): void => {
    dispatch(
      actions.changeEducationField({
        index: index,
        key: location,
        value: value,
      }),
    );
  };

  const onChangeEducationFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const index = event.target.getAttribute('data-index');
    onChangeEducationField(index, name, value);
  };

  const onDeleteEducationFields = (index: number) => {
    dispatch(actions.deleteEducationField({ index: index }));
  };

  const onToggleEduDropdown = (index: number) => {
    dispatch(actions.toggleEduDropdown({ index: index }));
  };

  return {
    addEducation,
    educations,
    onChangeEducationFields,
    onDeleteEducationFields,
    onToggleEduDropdown,
  };
}

export default useEducationsChangeField;
