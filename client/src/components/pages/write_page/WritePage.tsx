import React from 'react';
import Write from './write/Write';
import styles from '../../../styles/pages/write_page/Index.module.css';
import Preview from './preview/Preview';
import { useMediaQuery } from 'react-responsive';

const WritePage: React.FC = () => {
  // * ====================
  // *  RESPONSIVE
  // * ====================
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1023px)',
  });

  return (
    <>
      {isPc && (
        <div className={styles.block}>
          <Write />
          <Preview />
        </div>
      )}
      {isMobile && (
        <div className={styles.block}>
          <Write />
        </div>
      )}
    </>
  );
};

export default WritePage;
