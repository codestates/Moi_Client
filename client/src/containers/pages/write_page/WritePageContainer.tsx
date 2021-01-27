import React from 'react';
import { useSelector } from 'react-redux';

//* Import child Components
import WritePage from '../../../components/pages/write_page/WritePage';

//* Import custom hooks
import useLoadPreviewValues from '../../../hooks/pages/write_page/useLoadPreviewValues';
import usePreviewModal from '../../../hooks/pages/write_page/usePreviewModal';

//* Import reduce states
import { ExperienceState } from '../../../modules/changeField/workExperience/types';
import { InfoState } from '../../../modules/changeField/info/types';
import { SkillsState } from '../../../modules/changeField/skills/types';
import { AeaState } from '../../../modules/changeField/aea/types';
import { EduState } from '../../../modules/changeField/education/types';

const WritePageContainer: React.FC = () => {
  const values = useLoadPreviewValues();
  const { preview, onPreviewModal } = usePreviewModal();

  const { info, skills, workExperience, aeas, educations } = useSelector(
    ({
      workExperienceField,
      infoField,
      educationsField,
      aeasField,
      skillsField,
    }: {
      workExperienceField: ExperienceState;
      infoField: InfoState;
      educationsField: EduState;
      aeasField: AeaState;
      skillsField: SkillsState;
    }) => ({
      workExperience: workExperienceField.workExperience,
      educations: educationsField.educations,
      info: infoField.info,
      skills: skillsField.skills,
      aeas: aeasField.aeas,
    }),
  );

  const saveLocal = () => {
    const values = {
      info,
      skills,
      workExperience,
      aeas,
      educations,
    };
    localStorage.setItem('resume-field', JSON.stringify(values));
  };

  return (
    <>
      <WritePage
        values={values}
        preview={preview}
        onPreviewModal={onPreviewModal}
        saveLocal={saveLocal}
      />
    </>
  );
};
export default WritePageContainer;
