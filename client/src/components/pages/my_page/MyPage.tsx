import React from 'react';
import styles from '../../../styles/pages/my_page/Index.module.css';
import Resume from './resume/Resume';
import { ResumeData } from '../../../modules/get_mypage/types';
interface MypageProps {
  list: ResumeData[];
}
const MyPage: React.FC<MypageProps> = ({ list }) => {
  return (
    <div className={styles.block}>
      <Resume list={list} />
    </div>
  );
};
export default MyPage;
