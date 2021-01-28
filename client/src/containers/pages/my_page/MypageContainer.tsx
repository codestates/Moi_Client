import React, { useEffect } from 'react';
import MyPage from '../../../components/pages/my_page/MyPage';
import useMypageRequest from '../../../hooks/pages/my_page/useMypageRequest';

const MypageContainer: React.FC = () => {
  const { onMypageRequest, list } = useMypageRequest();

  useEffect(() => {
    onMypageRequest();
  }, []);
  return (
    <>
      <MyPage list={list} />
    </>
  );
};

export default MypageContainer;
