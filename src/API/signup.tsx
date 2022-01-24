import { Response } from '@src/types';

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

    console.log(serverResponse);

    const { accessToken, refreshToken } = serverResponse;
    const { id, firstName, lastName, email } = serverResponse.data;

    console.log('SignUp endpont', '---data---', accessToken, refreshToken, firstName, lastName, id, email);

    return serverResponse;
  } catch (error) {
    console.log(error);
  }
};
