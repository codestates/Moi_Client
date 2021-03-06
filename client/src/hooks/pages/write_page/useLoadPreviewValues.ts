import { useSelector } from 'react-redux';

import {
  ExperienceState,
  ExperienceItem,
} from '../../../modules/changeField/workExperience/types';
import { InfoState } from '../../../modules/changeField/info/types';
import {
  SkillsState,
  SkillItem,
} from '../../../modules/changeField/skills/types';
import { AeaState, AeaItem } from '../../../modules/changeField/aea/types';
import {
  EduState,
  EducationItem,
} from '../../../modules/changeField/education/types';
import {
  CertificateItem,
  CertificateState,
} from '../../../modules/changeField/certificate/types';

function useLoadPreviewValues(): {
  info: {
    username: string;
    avatar: string;
    profile: string;
    contact: {
      address: string;
      phone: string;
      email: string;
      link: {
        facebook: string;
        twitter: string;
        blog: string;
        github: string;
        youtube: string;
        instagram: string;
      };
    };
  };
  skills: SkillItem[];
  workExperience: ExperienceItem[];
  educations: EducationItem[];
  aeas: AeaItem[];
  certificates: CertificateItem[];
} {
  //? useSelector
  const {
    info,
    skills,
    workExperience,
    aeas,
    educations,
    certificates,
  } = useSelector(
    ({
      workExperienceField,
      infoField,
      educationsField,
      aeasField,
      skillsField,
      certificateField,
    }: {
      workExperienceField: ExperienceState;
      infoField: InfoState;
      educationsField: EduState;
      aeasField: AeaState;
      skillsField: SkillsState;
      certificateField: CertificateState;
    }) => ({
      workExperience: workExperienceField.workExperience,
      educations: educationsField.educations,
      info: infoField.info,
      skills: skillsField.skills,
      aeas: aeasField.aeas,
      certificates: certificateField.certificates,
    }),
  );

  const values = {
    info,
    skills,
    workExperience,
    educations,
    aeas,
    certificates,
  };
  // * VARIABLE & FUNCTIONS
  return values;
}

export default useLoadPreviewValues;
