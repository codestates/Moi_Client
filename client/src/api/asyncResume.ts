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
  const response = await axios.post(
    'https://www.everysmoi.tk/resume/save',
    data,
    {
      withCredentials: true,
    },
  );
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
    `https://www.everysmoi.tk/resume/getresume/${resumeId}`,
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

export const updateResumeAsync: (data: any) => Promise<UpdateResult> = async (
  data,
) => {
  const response = await axios.post(
    'https://www.everysmoi.tk/resume/edit',
    data,
    {
      withCredentials: true,
    },
  );
  if (!response.data.newResume) {
    throw new Error('불러오기에 실패했습니다.');
  }
  return response.data;
};

export interface UpdateResult {
  isEdited: boolean;
  newResume: {
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

export const uploadImageAsync: (file: any) => Promise<UploadResult> = async (
  file,
) => {
  const response = await axios.post(
    'https://www.everysmoi.tk/upload/image',
    file.formData,
    {
      withCredentials: true,
    },
  );
  if (!response.data.isUpload) {
    throw new Error('저장에 실패했습니다.');
  }
  return response.data;
};
export interface UploadResult {
  location: string;
  isUpload: null | boolean;
}

export const deleteResumeAsync: (data: any) => Promise<DeleteResult> = async (
  data,
) => {
  const response = await axios.post(
    'https://www.everysmoi.tk/resume/delete',
    data,
    {
      withCredentials: true,
    },
  );

  return response.data;
};

export interface DeleteResult {
  isDeleted: boolean;
}
