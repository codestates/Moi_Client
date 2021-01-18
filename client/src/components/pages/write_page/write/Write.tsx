import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import UserInfo from './user_info/UserInfo';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface WriteProps {
  username: string;
  profile: string;
  address: string;
  phone: string;
  email: string;
  onChangeFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addSkill: () => void;
}

const Write: React.FC<WriteProps> = ({
  username,
  profile,
  address,
  phone,
  email,
  onChangeFields,
  onChangeTextAreas,
}) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <UserInfo
          username={username}
          address={address}
          phone={phone}
          email={email}
          onChangeFields={onChangeFields}
        />
        <Profile profile={profile} onChangeTextAreas={onChangeTextAreas} />
        <Skills addSkill={addSkill}/>
      </div>
    </section>
  );
};
export default Write;
