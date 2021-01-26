import React from 'react';
import styles from '../../../styles/pages/my_page/Index.module.css';
import Resume from './resume/Resume';
const MyPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Resume />
    </div>
  );
};
export default MyPage;
