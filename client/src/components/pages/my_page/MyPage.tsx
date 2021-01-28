import React from 'react';
import styles from '../../../styles/pages/my_page/Index.module.css';
import Resume from './resume/Resume';
import { ResumeData } from '../../../modules/get_mypage/types';
interface MypageProps {
  list: ResumeData[];
  editRequest: (resumeId: string) => void;
}
const MyPage: React.FC<MypageProps> = ({ list, editRequest }) => {
  return (
    <div className={styles.block}>
      <Resume list={list} editRequest={editRequest} />
    </div>
  );
};
export default MyPage;
