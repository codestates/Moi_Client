import React from 'react';
import Info from '../../../../components/pages/write_page/write/user_info/UserInfo';
import Profile from '../../../../components/pages/write_page/write/profile/Profile';
import useChangeInfoField from '../../../../hooks/pages/write_page/useChangeInfoField';

const InfoContainer: React.FC = () => {
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
      <Info
        username={username}
        address={address}
        phone={phone}
        email={email}
        onChangeFields={onChangeFields}
      />
      <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
    </>
  );
};

export default InfoContainer;
