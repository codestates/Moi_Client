import React from 'react';
import Aea from '../../../../components/pages/write_page/write/aea/Aea';
import useAeasChangeField from '../../../../hooks/pages/write_page/aeas/useAeasChangeField';
const AeaContainer: React.FC = () => {
  const {
    addAea,
    aeas,
    onChangeAeaFields,
    onDeleteAeaFields,
  } = useAeasChangeField();
  return (
    <>
      <Aea
        addAea={addAea}
        aeas={aeas}
        onChangeAeaFields={onChangeAeaFields}
        onDeleteAeaFields={onDeleteAeaFields}
      />
    </>
  );
};

export default AeaContainer;
