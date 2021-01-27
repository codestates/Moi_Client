import { useDispatch } from 'react-redux';
import * as info from '../../../modules/changeField/info/actions';
import * as skills from '../../../modules/changeField/skills/actions';
import * as experience from '../../../modules/changeField/workExperience/actions';
import * as educations from '../../../modules/changeField/education/actions';
import * as aeas from '../../../modules/changeField/aea/actions';
import * as asyncResume from '../../../modules/asyncResumeField/actions';

import { SkillItem } from '../../../modules/changeField/skills/types';
import { ExperienceItem } from '../../../modules/changeField/workExperience/types';
import { AeaItem } from '../../../modules/changeField/aea/types';
import { EducationItem } from '../../../modules/changeField/education/types';

function useSaveLocalStorage(): {
  loadInfoField: () => void;
  setLocalStorage: (values: {
    template: number;
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
    aeas: AeaItem[];
    educations: EducationItem[];
  }) => void;
} {
  const dispatch = useDispatch();

  const setLocalStorage = (values: {
    template: number;
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
    aeas: AeaItem[];
    educations: EducationItem[];
  }) => {
    localStorage.setItem('resume-field', JSON.stringify(values));
    if (localStorage.getItem('current_user')) {
      dispatch(asyncResume.saveResumeFieldRequest({ values }));
    }
  };

  const loadInfoField = () => {
    if (localStorage.getItem('resume-field')) {
      const localState = JSON.parse(
        localStorage.getItem('resume-field') || '{}',
      );
      dispatch(info.loadInfoField({ state: localState.info }));
      dispatch(skills.loadSkillsField({ state: localState.skills }));
      dispatch(
        experience.loadExperienceField({ state: localState.workExperience }),
      );
      dispatch(educations.loadEducationField({ state: localState.educations }));
      dispatch(aeas.loadAeaField({ state: localState.aeas }));
    }
  };

  return { loadInfoField, setLocalStorage };
  // * VARIABLE & FUNCTIONS
}

export default useSaveLocalStorage;
