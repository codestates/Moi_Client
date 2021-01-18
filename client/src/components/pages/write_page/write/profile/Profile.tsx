import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/Write.module.css';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface ProfileProps {
  profile: string;
  onChangeTextAreas: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const Profile: React.FC<ProfileProps> = ({ profile, onChangeTextAreas }) => {
  return (
    <article className={styles.profile_container}>
      <div className={styles.profile_title}>간단 소개글</div>
      <div className={styles.profile_formContainer}>
        <form className={styles.profile_form}>
          <textarea
            className={styles.profile_textarea}
            name="profile"
            placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요! (200자 권장)"
            value={profile}
            onChange={onChangeTextAreas}
          />
        </form>
      </div>
    </article>
  );
};
export default Profile;
