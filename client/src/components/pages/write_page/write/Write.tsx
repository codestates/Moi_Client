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

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================

const Write: React.FC = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <InfoContainer />
        <SkillsContainer />
        <WorkExperienceContainer />
        <EducationContainer />
        <AeaContainer />
      </div>
    </section>
  );
};
export default Write;
