import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyPage from '../../../components/pages/my_page/MyPage';
import useMypageRequest from '../../../hooks/pages/my_page/useMypageRequest';
import useEditResumeField from '../../../hooks/pages/my_page/useEditResumeField';

const MypageContainer: React.FC = () => {
  const { onMypageRequest, list } = useMypageRequest();
  const { editRequest } = useEditResumeField();
  const history = useHistory();

  useEffect(() => {
    onMypageRequest();
  }, []);

  useEffect(() => {
    onMypageRequest();
  }, [history]);
  return (
    <>
      <MyPage list={list} editRequest={editRequest} />
    </>
  );
};

export default MypageContainer;
