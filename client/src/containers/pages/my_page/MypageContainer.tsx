import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MyPage from '../../../components/pages/my_page/MyPage';
import useMypageRequest from '../../../hooks/pages/my_page/useMypageRequest';
import useEditResumeField from '../../../hooks/pages/my_page/useEditResumeField';
import useDeleteResumeField from '../../../hooks/pages/my_page/useDeleteReumeField';
import useDeleteResumeModal from '../../../hooks/systems/modal/useDeleteResumeModal';

const MypageContainer: React.FC = () => {
  const { onMypageRequest, list } = useMypageRequest();
  const history = useHistory();
  const { editRequest } = useEditResumeField();
  const { onDeleteResume } = useDeleteResumeField();
  const { deleteModal, onDeleteResumeModal } = useDeleteResumeModal();

  useEffect(() => {
    onMypageRequest();
  }, []);

  useEffect(() => {
    onMypageRequest();
  }, [history]);
  return (
    <>
      <MyPage
        list={list}
        editRequest={editRequest}
        onDeleteResume={onDeleteResume}
        onDeleteResumeModal={onDeleteResumeModal}
        deleteModal={deleteModal}
        onMypageRequest={onMypageRequest}
      />
    </>
  );
};

export default MypageContainer;
