import React from 'react';
import Education from '../../../../components/pages/write_page/write/education/Education';
import useEducationsChangeField from '../../../../hooks/pages/write_page/educations/useEducationsChangeField';
const EducationContainer: React.FC = () => {
  const {
    addEducation,
    educations,
    onChangeEducationFields,
    onDeleteEducationFields,
    onToggleEduDropdown,
  } = useEducationsChangeField();

  return (
    <>
      <Education
        addEducation={addEducation}
        educations={educations}
        onChangeEducationFields={onChangeEducationFields}
        onDeleteEducationFields={onDeleteEducationFields}
        onToggleEduDropdown={onToggleEduDropdown}
      />
    </>
  );
};

export default EducationContainer;
