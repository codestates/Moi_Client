import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Info from '../../../../components/pages/write_page/write/user_info/UserInfo';
import Profile from '../../../../components/pages/write_page/write/profile/Profile';
import useChangeInfoField from '../../../../hooks/pages/write_page/useChangeInfoField';
import useSaveLocalStorage from '../../../../hooks/pages/write_page/useSaveLocalStorage';

import { ExperienceState } from '../../../../modules/changeField/workExperience/types';
import { InfoState } from '../../../../modules/changeField/info/types';
import { SkillsState } from '../../../../modules/changeField/skills/types';
import { AeaState } from '../../../../modules/changeField/aea/types';
import { EduState } from '../../../../modules/changeField/education/types';

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
      />
      <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
    </>
  );
};

export default InfoContainer;
