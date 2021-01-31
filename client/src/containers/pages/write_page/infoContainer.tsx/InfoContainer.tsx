import React, { useEffect } from 'react';
import Info from '../../../../components/pages/write_page/write/user_info/UserInfo';
import Profile from '../../../../components/pages/write_page/write/profile/Profile';
import useChangeInfoField from '../../../../hooks/pages/write_page/useChangeInfoField';
import useSaveLocalStorage from '../../../../hooks/pages/write_page/useSaveLocalStorage';

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
    emailMsg,
    usernameMsg,
    phoneMsg,
    addressMsg,
    onChangeFields,
    onChangeTextAreas,
  } = useChangeInfoField();

  const { loadInfoField } = useSaveLocalStorage();

  useEffect(() => {
    loadInfoField();
  }, []);

  return (
    <>
      <Info
        username={username}
        address={address}
        phone={phone}
        email={email}
        onChangeFields={onChangeFields}
        emailMsg={emailMsg}
        usernameMsg={usernameMsg}
        phoneMsg={phoneMsg}
        addressMsg={addressMsg}
      />
      <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
    </>
  );
};

export default InfoContainer;
