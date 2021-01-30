import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/pages/my_page/Index.module.css';
import ResumeAddCard from './ResumeAddCard';
import ResumeCard from './ResumeCard';
import { ResumeData } from '../../../modules/get_mypage/types';
interface MypageProps {
  list: ResumeData[];
  editRequest: (resumeId: string) => void;
  onDeleteResume: (resumeId: string) => void;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  handleMouseLeave: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
}
const MyPage: React.FC<MypageProps> = ({
  list,
  editRequest,
  handleMouseEnter,
  handleMouseLeave,
  onDeleteResume,
}) => {
  return (
    <div className={styles.block}>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.card__block}>
            <Link to="/template">
              <ResumeAddCard />
            </Link>
          </li>
          {list.map((resume, index) => (
            <li className={styles.card__block} key={resume.resumeId}>
              <ResumeCard
                resume={resume}
                editRequest={editRequest}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                onDeleteResume={onDeleteResume}
                currentIndex={index}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default MyPage;
