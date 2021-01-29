import { ActionType } from 'typesafe-actions';

//* import redux state types
import { ExperienceItem } from '../../modules/changeField/workExperience/types';
import { SkillItem } from '../../modules/changeField/skills/types';
import { AeaItem } from '../../modules/changeField/aea/types';
import { EducationItem } from '../../modules/changeField/education/types';

import {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
  editResumeFieldRequest,
  editResumeFieldSuccess,
  editResumeFieldFailure,
} from './actions';

export interface SaveEditResumeState {
  saveResume: {
    save: boolean | null;
    message: null | string;
  };
  editResume: {
    resume: null | {
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
    };
    message: null | string;
  };
}

const actions = {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
  editResumeFieldRequest,
  editResumeFieldSuccess,
  editResumeFieldFailure,
};
export type Actions = ActionType<typeof actions>;
