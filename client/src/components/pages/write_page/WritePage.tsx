import React from 'react';
import Write from './write/Write';
import styles from '../../../styles/pages/write_page/Index.module.css';
import Preview from './preview/Preview';

interface WritePageProps {
  addSkill: () => void;
}
const WritePage: React.FC<WritePageProps> = ({ addSkill }) => {
  return (
    <div className={styles.block}>
      <Write addSkill={addSkill} />
      <Preview />
    </div>
  );
};

export default WritePage;
