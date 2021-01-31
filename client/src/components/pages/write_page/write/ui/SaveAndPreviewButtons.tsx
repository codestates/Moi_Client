import React from 'react';
import styles from '../../../../../styles/pages/write_page/write/ui/SaveAndPreviewButtons.module.css';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { FaDivide } from 'react-icons/fa';
// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface SaveAndPreviewButtonsProps {
  onPreviewModal: () => void;
  saveLocal: () => void;
  onSaveModal: () => void;
}

const SaveAndPreviewButtons: React.FC<SaveAndPreviewButtonsProps> = ({
  onPreviewModal,
  saveLocal,
  onSaveModal,
}) => {
  const history = useHistory();
  const goTemplatePage = () => {
    history.goBack();
  };
  return (
    <div className={styles.buttons_container__div}>
      <button className={styles.goBack__button} onClick={goTemplatePage}>
        <RiArrowGoBackLine /> 템플릿 선택 페이지로
      </button>
      <div>
        <button
          className={styles.preview__button}
          onClick={() => {
            saveLocal(), onSaveModal();
          }}
        >
          저장
        </button>
        <button className={styles.save__button} onClick={onPreviewModal}>
          미리보기
        </button>
      </div>
    </div>
  );
};

export default SaveAndPreviewButtons;
