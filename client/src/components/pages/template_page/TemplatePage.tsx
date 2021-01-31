import React from 'react';
import styles from '../../../styles/pages/template_page/Template.module.css';

//* IMPORT_CHILD_COMPONENTS
import Title from './title/Title';
import Cards from './cards/Cards';

interface TemplatePageProps {
  selectTemplate: (templateCode: number) => void;
}
const TemplatePage: React.FC<TemplatePageProps> = ({ selectTemplate }) => {
  return (
    <div className={styles.template__container}>
      <Title />
      <Cards selectTemplate={selectTemplate} />
    </div>
  );
};

export default TemplatePage;
