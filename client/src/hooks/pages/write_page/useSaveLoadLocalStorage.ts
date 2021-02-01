import { useDispatch } from 'react-redux';
import * as info from '../../../modules/changeField/info/actions';
import * as skills from '../../../modules/changeField/skills/actions';
import * as experience from '../../../modules/changeField/workExperience/actions';
import * as educations from '../../../modules/changeField/education/actions';
import * as aeas from '../../../modules/changeField/aea/actions';
import * as asyncResume from '../../../modules/asyncResumeField/actions';
import * as certificate from '../../../modules/changeField/certificate/actions';

import { SkillItem } from '../../../modules/changeField/skills/types';
import { ExperienceItem } from '../../../modules/changeField/workExperience/types';
import { AeaItem } from '../../../modules/changeField/aea/types';
import { EducationItem } from '../../../modules/changeField/education/types';
import { CertificateItem } from '../../../modules/changeField/certificate/types';

function useSaveLocalStorage(): {
  loadInfoField: () => void;
  setLocalStorage: (values: {
    template: number;
    info: {
      username: string;
      avatar: string;
      profile: string;
      title: string;
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
    certificates: CertificateItem[];
  }) => void;
} {
  const dispatch = useDispatch();

  const setLocalStorage = (values: {
    template: number;
    resumeId?: string;
    info: {
      username: string;
      avatar: string;
      profile: string;
      title: string | null;
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
    certificates: CertificateItem[];
  }) => {
    localStorage.setItem('resume-field', JSON.stringify(values));
    if (localStorage.getItem('current_user')) {
      if (localStorage.getItem('edit_field')) {
        const localState = JSON.parse(
          localStorage.getItem('edit_field') || '{}',
        );
        values.resumeId = localState._id;

        dispatch(asyncResume.updateResumeFieldRequest({ values }));
      } else {
        dispatch(asyncResume.saveResumeFieldRequest({ values }));
      }
    }
  };

  const loadInfoField = () => {
    if (localStorage.getItem('edit_field')) {
      const localState = JSON.parse(localStorage.getItem('edit_field') || '{}');
      dispatch(info.loadInfoField({ state: localState.info }));
      dispatch(skills.loadSkillsField({ state: localState.skills }));
      dispatch(
        experience.loadExperienceField({ state: localState.workExperience }),
      );
      dispatch(educations.loadEducationField({ state: localState.educations }));
      dispatch(aeas.loadAeaField({ state: localState.aeas }));
      dispatch(
        certificate.loadCertificateField({ state: localState.certificates }),
      );
    } else if (localStorage.getItem('resume-field')) {
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
      dispatch(
        certificate.loadCertificateField({ state: localState.certificates }),
      );
    }
  };

  return { loadInfoField, setLocalStorage };
  // * VARIABLE & FUNCTIONS
}

export default useSaveLocalStorage;
