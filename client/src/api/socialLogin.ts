/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export const google: (data: any) => Promise<UserInfo> = async (data) => {
  const response = await axios.post('/auth/google', data, {
    withCredentials: true,
  });
  return response.data;
};

export const kakao: (data: any) => Promise<UserInfo> = async (data) => {
  const response = await axios.post('/auth/kakao', data, {
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

export const check: () => Promise<UserInfo> = async () => {
  const response = await axios.get('/auth/isauth', { withCredentials: true });
  return response.data;
};

export const logout: () => Promise<UserInfo> = async () => {
  const response = await axios.post(
    '/auth/signout',
    {},
    { withCredentials: true },
  );

  return response.data;
};

export const withdrawal: () => Promise<UserInfo> = async () => {
  const response = await axios.post(
    '/auth/withdrawal',
    {},
    { withCredentials: true },
  );

  return response.data;
};

export interface UserInfo {
  currentUser: {
    id: string;
    email: string;
    thumbnail: string;
  };
  isLoggedIn: boolean;
  withdrawal: boolean;
}

export default google;
