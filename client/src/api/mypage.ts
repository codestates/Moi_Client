import axios from 'axios';

export const getMypageAsync: () => Promise<CreateResume> = async () => {
  const response = await axios.get('http://localhost:8080/resume/list', {
    withCredentials: true,
  });
  return response.data;
};

export interface CreateResume {
  list: [
    {
      resumeId: string;
      title: string;
      createdAt: string;
      template: string;
      isGetList: boolean;
    },
  ];
}

export default getMypageAsync;
