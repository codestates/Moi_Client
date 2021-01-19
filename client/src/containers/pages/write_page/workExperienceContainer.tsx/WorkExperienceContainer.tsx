import React from 'react';
import WorkExperience from '../../../../components/pages/write_page/write/work_experience/WorkExperience';
import useExperienceChangeField from '../../../../hooks/pages/write_page/useExperienceChangeField';

const WorkExperienceContainer: React.FC = () => {
  const {
    workExperience,
    addExperience,
    addWork,
    changeExperienceFields,
  } = useExperienceChangeField();
  return (
    <>
      <WorkExperience
        addExperience={addExperience}
        workExperience={workExperience}
        addWork={addWork}
        changeExperienceFields={changeExperienceFields}
      />
    </>
  );
};

export default WorkExperienceContainer;
