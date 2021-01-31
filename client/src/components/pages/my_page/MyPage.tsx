import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/pages/my_page/Index.module.css';
import ResumeAddCard from './ResumeAddCard';
import ResumeCard from './ResumeCard';
import { ResumeData } from '../../../modules/get_mypage/types';
import DeleteResumeModal from '../../systems/modal/DeleteResumeModal';
interface MypageProps {
  list: ResumeData[];
  editRequest: (resumeId: string) => void;
  onDeleteResume: (resumeId: string) => void;
  onDeleteResumeModal: (resumeId: string | null, title: string | null) => void;
  deleteModal: {
    modal: boolean;
    resumeId: string;
    title: string | null;
  };
  onMypageRequest: () => void;
}
const MyPage: React.FC<MypageProps> = ({
  list,
  editRequest,
  onDeleteResume,
  onDeleteResumeModal,
  deleteModal,
  onMypageRequest,
}) => {
  return (
    <>
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
                  onDeleteResume={onDeleteResume}
                  currentIndex={index}
                  onDeleteResumeModal={onDeleteResumeModal}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {deleteModal.modal && (
        <DeleteResumeModal
          onDeleteResumeModal={onDeleteResumeModal}
          onDeleteResume={onDeleteResume}
          deleteModal={deleteModal}
          onMypageRequest={onMypageRequest}
        />
      )}
    </>
  );
};
export default MyPage;
