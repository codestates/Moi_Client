import React from 'react';
import Write from './write/Write';
import styles from '../../../styles/pages/write_page/Index.module.css';
import Preview from './preview/Preview';

const WritePage: React.FC = () => {
  return (
    <div className={styles.block}>
      <Write />
      <Preview />
    </div>
  );
};

export default WritePage;
