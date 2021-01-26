import axios from 'axios';

export const postAskAsync: (data: any) => Promise<Message> = async (data) => {
  const response = await axios.post('http://localhost:8080/mail', data, {
    withCredentials: true,
  });
  return response.data;
};
export interface Message {
  isMailSucssessed: boolean;
}
export default postAskAsync;
