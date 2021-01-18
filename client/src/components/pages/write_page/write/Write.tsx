import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import UserInfo from './user_info/UserInfo';
interface WriteProps {
  addSkill: () => void;
}
const Write: React.FC<WriteProps> = ({ addSkill }) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <UserInfo />
        <Profile />
        <Skills addSkill={addSkill} />
      </div>
    </section>
  );
};
export default Write;
