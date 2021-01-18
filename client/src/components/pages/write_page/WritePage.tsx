import React from 'react';
import Write from './write/Write';
import styles from '../../../styles/pages/write_page/Index.module.css';
import Preview from './preview/Preview';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface WritePageProps {
  username: string;
  profile: string;
  address: string;
  phone: string;
  email: string;
  onChangeFields: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const WritePage: React.FC<WritePageProps> = ({
  username,
  profile,
  address,
  phone,
  email,
  onChangeFields,
  onChangeTextAreas,
}) => {
  return (
    <div className={styles.block}>
      <Write
        username={username}
        profile={profile}
        address={address}
        phone={phone}
        email={email}
        onChangeFields={onChangeFields}
        onChangeTextAreas={onChangeTextAreas}
      />
      <Preview />
    </div>
  );
};

export default WritePage;
