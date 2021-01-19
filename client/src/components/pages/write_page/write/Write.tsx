import React from 'react';
import styles from '../../../../styles/pages/write_page/write/Write.module.css';

// * ======================
// *   IMPORT_CHILD_CONTAINERS
// * ======================
import SkillsContainer from '../../../../containers/pages/write_page/skrillsContainer.tsx/SkillsContainer';
import InfoContainer from '../../../../containers/pages/write_page/infoContainer.tsx/InfoContainer';

// ? ======================
// ?   INTERFACE_TYPE
// ? ======================

const Write: React.FC = () => {
  return (
    <section className={styles.block}>
      <div className={styles.container}>
        <InfoContainer />
        <SkillsContainer />
      </div>
    </section>
  );
};
export default Write;
