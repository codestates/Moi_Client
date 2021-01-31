import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/systems/modal/DeleteResume.module.css';

interface DeleteResumeModalProps {
  deleteModal: {
    modal: boolean;
    resumeId: string;
    title: string | null;
  };
  onDeleteResumeModal: (resumeId: string | null, title: string | null) => void;
  onDeleteResume: (resumeId: string) => void;
  onMypageRequest: () => void;
}

const DeleteResumeModal: React.FC<DeleteResumeModalProps> = ({
  onDeleteResume,
  onDeleteResumeModal,
  deleteModal,
  onMypageRequest,
}) => {
  return (
    <div className={styles.full__screen}>
      <div className={styles.white__box}>
        <div className={styles.wanring__message__block}>
          <p className={styles.wanring__message}>삭제하시겠습니까?</p>
        </div>
        <ul className={styles.button__block}>
          <li className={styles.cancle__button__area}>
            <button
              className={styles.cancle__button}
              onClick={() => onDeleteResumeModal(null, null)}
            >
              취소
            </button>
          </li>
          <li className={styles.delete__button__area}>
            <button
              className={styles.delete__button}
              onClick={() => {
                onDeleteResume(deleteModal.resumeId),
                  onDeleteResumeModal(null, null),
                  onMypageRequest();
              }}
            >
              삭제
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeleteResumeModal;
