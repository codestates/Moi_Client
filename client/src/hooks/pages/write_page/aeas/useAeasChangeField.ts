import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/changeField/aea/actions';
import { State, AeaItem } from '../../../../modules/changeField/aea/types';

function useAeasChangeField(): {
  addAea: () => void;
  aeas: AeaItem[];
  onChangeAeaFields: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteAeaFields: (index: number) => void;
  onToggleAeaDropdown: (index: number) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { aeas } = useSelector(({ aeasField }: { aeasField: State }) => ({
    aeas: aeasField.aeas,
  }));

  // * VARIABLE & FUNCTIONS
  const addAea = () => {
    dispatch(actions.addAeaField());
  };

  const onChangeAeaField = <U, T>(index: U, location: T, value: T): void => {
    dispatch(
      actions.changeAeaField({
        index: index,
        key: location,
        value: value,
      }),
    );
  };

  const onChangeAeaFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const index = event.target.getAttribute('data-index');
    onChangeAeaField(index, name, value);
  };

  const onDeleteAeaFields = (index: number) => {
    dispatch(actions.deleteAeaField({ index: index }));
  };

  const onToggleAeaDropdown = (index: number) => {
    dispatch(actions.toggleEduDropdown({ index: index }));
  };

  return {
    addAea,
    aeas,
    onChangeAeaFields,
    onDeleteAeaFields,
    onToggleAeaDropdown,
  };
}

export default useAeasChangeField;
