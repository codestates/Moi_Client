import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const postAskAsync: (data: any) => Promise<Message> = async (data) => {
  const response = await axios.post('https://www.everysmoi.tk/mail', data, {
    withCredentials: true,
  });
  return response.data;
};
export interface Message {
  isMailSucssessed: boolean;
}
export default postAskAsync;
