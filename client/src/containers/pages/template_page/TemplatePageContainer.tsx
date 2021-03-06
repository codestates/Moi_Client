import React, { useEffect } from 'react';
import TemplatePage from '../../../components/pages/template_page/TemplatePage';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import useSelectTemplate from '../../../hooks/pages/template_page/useSelectTemplate';

const TemplatePageContainer: React.FC<RouteComponentProps> = () => {
  const { selectTemplate, initResumeField } = useSelectTemplate();

  useEffect(() => {
    initResumeField();
  }, []);
  return (
    <>
      <TemplatePage selectTemplate={selectTemplate} />
    </>
  );
};

export default withRouter(TemplatePageContainer);
