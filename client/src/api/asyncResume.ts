/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { ExperienceItem } from '../modules/changeField/workExperience/types';
import { SkillItem } from '../modules/changeField/skills/types';
import { AeaItem } from '../modules/changeField/aea/types';
import { EducationItem } from '../modules/changeField/education/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveResumeAsync: (data: any) => Promise<SaveResult> = async (
  data,
) => {
  const response = await axios.post('http://localhost:8080/resume/save', data, {
    withCredentials: true,
  });
  if (!response.data.save) {
    throw new Error('저장에 실패했습니다.');
  }
  return response.data;
};
export interface SaveResult {
  save: boolean;
}

export const editResumeAsync: (data: any) => Promise<EditResult> = async (
  data,
) => {
  const resumeId = data.resumeId;
  const response = await axios.get(
    `http://localhost:8080/resume/getresume/${resumeId}`,
    {
      withCredentials: true,
    },
  );
  if (!response.data.resume) {
    throw new Error('불러오기에 실패했습니다.');
  }
  localStorage.setItem('edit_field', JSON.stringify(response.data.resume));
  return response.data.resume;
};
export interface EditResult {
  values: {
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
}
