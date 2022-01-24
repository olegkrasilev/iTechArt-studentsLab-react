import * as yup from 'yup';

import { Response } from '@src/types';

export const signUpSchemaValidation = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password should be of minimum 6 characters length').required('Password is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

export const singUp = async (
  url: string,
  data: { email: string; password: string; firstName: string; lastName: string },
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const serverResponse: Response = await response.json();
    const { accessToken, refreshToken } = serverResponse;
    const { id, firstName, lastName, email } = serverResponse.data;

    console.log('SignUp endpont', '---data---', accessToken, refreshToken, firstName, lastName, id, email);

    return serverResponse;
  } catch (error) {
    console.log(error);
  }
};
