import React from 'react';
import WorkExperience from '../../../../components/pages/write_page/write/work_experience/WorkExperience';
import useExperienceChangeField from '../../../../hooks/pages/write_page/useExperienceChangeField';

const WorkExperienceContainer: React.FC = () => {
  const { workExperience, addExperience, addWork } = useExperienceChangeField();
  return (
    <>
      <WorkExperience
        addExperience={addExperience}
        workExperience={workExperience}
        addWork={addWork}
      />
    </>
  );
};

export default WorkExperienceContainer;
