import React, { useEffect } from 'react';
import UserInfo from '../../../../components/pages/write_page/write/user_info/UserInfo';
import Profile from '../../../../components/pages/write_page/write/profile/Profile';
import useChangeInfoField from '../../../../hooks/pages/write_page/useChangeInfoField';
import useSaveLocalStorage from '../../../../hooks/pages/write_page/useSaveLoadLocalStorage';
import useUploadModal from '../../../../hooks/systems/modal/useUploadModal';
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
    avatar,
    title,
    onChangeFields,
    onChangeTextAreas,
    onChangeAvatarField,
  } = useChangeInfoField();

  const { uploadModal, onUploadModal } = useUploadModal();

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
      <UserInfo
        username={username}
        address={address}
        phone={phone}
        email={email}
        avatar={avatar}
        title={title}
        onChangeFields={onChangeFields}
        uploadModal={uploadModal}
        onUploadModal={onUploadModal}
        onChangeAvatarField={onChangeAvatarField}
      />
      <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
    </>
  );
};

export default InfoContainer;
