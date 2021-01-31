import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Ask from '../../../components/pages/ask_page/ask/Ask';
import useAskChangeField from '../../../hooks/pages/ask_page/useAskChangeField';
import useAskRequest from '../../../hooks/pages/ask_page/useAskRequest';
const AskPageContainer: React.FC<RouteComponentProps> = ({ history }) => {
  const {
    username,
    email,
    title,
    desc,
    onChangeAskFields,
    onChangeTextAreas,
  } = useAskChangeField();

  const { onAskRequest, isMailSucssessed } = useAskRequest();

  useEffect(() => {
    if (isMailSucssessed === true) {
      history.push('/');
    }
  }, [isMailSucssessed]);
  return (
    <>
      <Ask
        username={username}
        email={email}
        title={title}
        desc={desc}
        onChangeAskFields={onChangeAskFields}
        onChangeTextAreas={onChangeTextAreas}
        onAskRequest={onAskRequest}
      />
    </>
  );
};

export default withRouter(AskPageContainer);
