import React from 'react';
import WritePage from '../../../components/pages/write_page/WritePage';
import useSkillsChangeField from '../../../hooks/pages/write_page/useSkillsChangeField';
const WritePageContainer: React.FC = () => {
  const { addSkill } = useSkillsChangeField();
  return (
    <>
      <WritePage addSkill={addSkill} />
    </>
  );
};
export default WritePageContainer;
