import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../modules/changeField/certificate/actions';
import {
  CertificateState,
  CertificateItem,
} from '../../../../modules/changeField/certificate/types';

function useCertificateChangeField(): {
  addCertificate: () => void;
  certificates: CertificateItem[];
  onChangeCertificateFields: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onDeleteCertificateFields: (index: number) => void;
  onToggleCetrificateDropdown: (index: number) => void;
} {
  //? useDispatch
  const dispatch = useDispatch();

  //? useSelector
  const { certificates } = useSelector(
    ({ certificateField }: { certificateField: CertificateState }) => ({
      certificates: certificateField.certificates,
    }),
  );

  // * VARIABLE & FUNCTIONS
  const addCertificate = () => {
    dispatch(actions.addCertificateField());
  };

  const onChangeCertificateField = <U, T>(
    index: U,
    location: T,
    value: T,
  ): void => {
    dispatch(
      actions.changeCertificateField({
        index: index,
        key: location,
        value: value,
      }),
    );
  };

  const onChangeCertificateFields = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;
    const index = event.target.getAttribute('data-index');
    onChangeCertificateField(index, name, value);
  };

  const onDeleteCertificateFields = (index: number) => {
    dispatch(actions.deleteCertificateField({ index: index }));
  };

  const onToggleCetrificateDropdown = (index: number) => {
    dispatch(actions.toggleCertificateDropdown({ index: index }));
  };

  return {
    addCertificate,
    certificates,
    onChangeCertificateFields,
    onDeleteCertificateFields,
    onToggleCetrificateDropdown,
  };
}

export default useCertificateChangeField;
