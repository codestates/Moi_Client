import React from 'react';
import Skills from '../../../../components/pages/write_page/write/skills/Skills';
import useSkillsChangeField from '../../../../hooks/pages/write_page/useSkillsChangeField';

const SkillsContainer: React.FC = () => {
  const {
    addSkill,
    skills,
    onChangeSkillFields,
    onDeleteSkillFields,
  } = useSkillsChangeField();

  return (
    <>
      <Skills
        addSkill={addSkill}
        skills={skills}
        onChangeSkillFields={onChangeSkillFields}
        onDeleteSkillFields={onDeleteSkillFields}
      />
    </>
  );
};

export default SkillsContainer;
