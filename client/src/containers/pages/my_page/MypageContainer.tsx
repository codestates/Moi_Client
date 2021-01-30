import React, { useEffect } from 'react';
import MyPage from '../../../components/pages/my_page/MyPage';
import useMypageRequest from '../../../hooks/pages/my_page/useMypageRequest';
import useEditResumeField from '../../../hooks/pages/my_page/useEditResumeField';

const MypageContainer: React.FC = () => {
  const { onMypageRequest, list } = useMypageRequest();
  const {
    editRequest,
    handleMouseEnter,
    handleMouseLeave,
  } = useEditResumeField();

  useEffect(() => {
    onMypageRequest();
  }, []);
  return (
    <>
      <MyPage
        list={list}
        editRequest={editRequest}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default MypageContainer;
