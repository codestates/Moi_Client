import React from 'react';
import AskPageContainer from '../../../containers/pages/ask_page/AskPageContainer';
import styles from '../../../styles/pages/ask_page/Index.module.css';

const AskPage: React.FC = () => {
  return (
    <div className={styles.block}>
      <AskPageContainer />
    </div>
  );
};

export default AskPage;
