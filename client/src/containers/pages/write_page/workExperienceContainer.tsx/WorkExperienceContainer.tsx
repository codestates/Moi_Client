import React from 'react';
import WorkExperience from '../../../../components/pages/write_page/write/work_experience/WorkExperience';
import useExperienceChangeField from '../../../../hooks/pages/write_page/useExperienceChangeField';

const WorkExperienceContainer: React.FC = () => {
  const {
    workExperience,
    addExperience,
    addJobDescription,
    changeExperienceFields,
    changeJobDescriptionFields,
    onDeleteExperienceFields,
    onDeleteJobDescFields,
    onCheckInOffice,
  } = useExperienceChangeField();

  return (
    <>
      <WorkExperience
        addExperience={addExperience}
        workExperience={workExperience}
        addJobDescription={addJobDescription}
        changeExperienceFields={changeExperienceFields}
        changeJobDescriptionFields={changeJobDescriptionFields}
        onDeleteExperienceFields={onDeleteExperienceFields}
        onDeleteJobDescFields={onDeleteJobDescFields}
        onCheckInOffice={onCheckInOffice}
      />
    </>
  );
};

export default WorkExperienceContainer;
