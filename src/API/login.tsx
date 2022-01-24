import { Response } from '@src/types';

export const login = async (url: string, data: { email: string; password: string }) => {
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

    console.log('Login endpont', '---data---', accessToken, refreshToken);

    return serverResponse;
  } catch (error) {
    console.log(error);
  }
};
