import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveResumeAsync: (data: any) => Promise<Result> = async (data) => {
  const response = await axios.post('http://localhost:8080/resume/save', data, {
    withCredentials: true,
  });
  if (!response.data.save) {
    throw new Error('저장에 실패했습니다.');
  }
  return response.data;
};
export interface Result {
  save: boolean;
}
export default saveResumeAsync;
