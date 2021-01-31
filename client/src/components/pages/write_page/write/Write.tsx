import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';
import { GoX } from 'react-icons/go';
// * ======================
// *   IMPORT_CHILD_CONTAINERS
// * ======================
import SkillsContainer from '../../../../containers/pages/write_page/skrillsContainer.tsx/SkillsContainer';
import InfoContainer from '../../../../containers/pages/write_page/infoContainer.tsx/InfoContainer';
import WorkExperienceContainer from '../../../../containers/pages/write_page/workExperienceContainer.tsx/WorkExperienceContainer';
import EducationContainer from '../../../../containers/pages/write_page/educationContainer/EducationContainer';
import AeaContainer from '../../../../containers/pages/write_page/aeaContainer/AeaContainer';
import SaveAndPreviewButtons from './ui/SaveAndPreviewButtons';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================
interface WriteProps {
  onPreviewModal: () => void;
  saveLocal: () => void;
  saveDoneModal: boolean;
  onSaveModal: () => void;
}

const Write: React.FC<WriteProps> = ({
  onPreviewModal,
  saveLocal,
  saveDoneModal,
  onSaveModal,
}) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        {saveDoneModal && (
          <div className={styles.save_modal_block__div}>
            <button onClick={onSaveModal}>
              <GoX />
            </button>
            <button onClick={onSaveModal}>
              <GoX />
            </button>
            이력서가 임시저장 되었습니다.
          </div>
        )}
        <InfoContainer />
        <SkillsContainer />
        <WorkExperienceContainer />
        <EducationContainer />
        <AeaContainer />
        <SaveAndPreviewButtons
          onPreviewModal={onPreviewModal}
          saveLocal={saveLocal}
          onSaveModal={onSaveModal}
        />
      </div>
    </section>
  );
};
export default Write;
