import axios from 'axios';

export const google: (data: any) => Promise<UserInfo> = async (data) => {
  console.log(data);
  const response = await axios.post('/auth/google', data, {
    withCredentials: true,
  });
  return response.data;
};

export const facebook: (data: any) => Promise<UserInfo> = async (data) => {
  const response = await axios.post('/auth/facebook', data, {
    withCredentials: true,
  });
  return response.data;
};

export const github: (data: any) => Promise<UserInfo> = async (data) => {
  const response = await axios.post('/auth/github', data, {
    withCredentials: true,
  });
  return response.data;
};

export interface UserInfo {
  currentUser: {
    id: string;
    email: string;
  };
}

export default google;
