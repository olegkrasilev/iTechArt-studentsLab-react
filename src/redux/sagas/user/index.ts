import { call, put } from 'redux-saga/effects';

import { LoginActions } from 'src/types/user';
import { loginEndpoint } from 'src/constants/endpoints';
import { LoginResponse } from '@src/types';
import { setAccessJwtToken, setRefreshToken } from 'src/utils/jwt';

const loginUser = async (url: string, data: { email: string; password: string }) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};

export function* watchLoginUser(payload: { payload: { email: string; password: string }; type: string }) {
  const { email, password } = payload.payload;
  try {
    const data: ReturnType<typeof loginUser> = yield call(loginUser, loginEndpoint, { email, password });
    const { id, firstName, lastName, accessToken, refreshToken } = data as unknown as LoginResponse;
    const dataToStore = { id, email, firstName, lastName };

    if (!(accessToken && refreshToken)) {
      throw new Error('Please try again');
    }

    setAccessJwtToken(accessToken);
    setRefreshToken(refreshToken);
    yield put({ type: LoginActions.loginUserSuccess, payload: dataToStore });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: LoginActions.loginUserError, payload: errorMessage });
    }
  }
}
