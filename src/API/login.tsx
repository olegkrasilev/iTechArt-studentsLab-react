import * as yup from 'yup';

import { Response } from '@src/types';

export const loginSchemaValidation = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
});

export const login = async (url: string, data: { email: string; password: string }) => {
  // try {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // if (!response.ok) {
  //   throw new Error('Something went wrong...');
  // }

  // const serverResponse: Response = await response.json();

  // const { accessToken, refreshToken } = serverResponse;

  // console.log('Login endpont', '---data---', accessToken, refreshToken);

  // return serverResponse;
  // } catch (error) {
  //   console.log(error);
  // }
};
