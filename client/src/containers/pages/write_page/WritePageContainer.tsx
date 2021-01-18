import React from 'react';
import WritePage from '../../../components/pages/write_page/WritePage';

// * ======================
// * IMPORT_CUSTOM_HOOKS
// * ======================
import useChangeInfoField from '../../../hooks/pages/write_page/useChangeInfoField';

const WritePageContainer: React.FC = () => {
  // * ======================
  // *   CUSTOM_HOOKS
  // * ======================
  const {
    username,
    profile,
    address,
    phone,
    email,
    onChangeFields,
    onChangeTextAreas,
  } = useChangeInfoField();

  return (
    <>
      <WritePage
        username={username}
        profile={profile}
        address={address}
        phone={phone}
        email={email}
        onChangeFields={onChangeFields}
        onChangeTextAreas={onChangeTextAreas}
      />
    </>
  );
};
export default WritePageContainer;
