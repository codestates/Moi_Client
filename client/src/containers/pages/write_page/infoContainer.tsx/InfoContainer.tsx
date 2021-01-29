import React, { useEffect } from 'react';
import Info from '../../../../components/pages/write_page/write/user_info/UserInfo';
import Profile from '../../../../components/pages/write_page/write/profile/Profile';
import useChangeInfoField from '../../../../hooks/pages/write_page/useChangeInfoField';
import useSaveLocalStorage from '../../../../hooks/pages/write_page/useSaveLoadLocalStorage';
import { useSelector } from 'react-redux';
import { SaveEditResumeState } from '../../../../modules/asyncResumeField/types';

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
    title,
    onChangeFields,
    onChangeTextAreas,
  } = useChangeInfoField();

  //? useSelector
  const { resume } = useSelector(
    ({ asyncResumeField }: { asyncResumeField: SaveEditResumeState }) => ({
      resume: asyncResumeField.editResume.resume,
    }),
  );

  const { loadInfoField } = useSaveLocalStorage();

  useEffect(() => {
    loadInfoField();
  }, [resume]);

  return (
    <>
      <Info
        username={username}
        address={address}
        phone={phone}
        email={email}
        title={title}
        onChangeFields={onChangeFields}
      />
      <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
    </>
  );
};

export default InfoContainer;
