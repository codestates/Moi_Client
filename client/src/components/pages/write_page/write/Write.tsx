import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';
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
}

const Write: React.FC<WriteProps> = ({ onPreviewModal, saveLocal }) => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <InfoContainer />
        <SkillsContainer />
        <WorkExperienceContainer />
        <EducationContainer />
        <AeaContainer />
        <SaveAndPreviewButtons
          onPreviewModal={onPreviewModal}
          saveLocal={saveLocal}
        />
      </div>
    </section>
  );
};
export default Write;
