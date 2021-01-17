import React from 'react';
import styles from '../../../styles/pages/template_page/Template.module.css';

//* IMPORT_CHILD_COMPONENTS
import Title from './title/Title';
import Cards from './cards/Cards';

const TemplatePage: React.FC = () => {
  return (
    <div className={styles.template__container}>
      <Title />
      <Cards />
    </div>
  );
};

export default TemplatePage;
