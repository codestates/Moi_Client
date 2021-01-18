import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';
import Profile from './profile/Profile';
import Skills from './skills/Skills';
import UserInfo from './user_info/UserInfo';
const Write: React.FC = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <UserInfo />
        <Profile />
        <Skills />
      </div>
    </section>
  );
};
export default Write;
