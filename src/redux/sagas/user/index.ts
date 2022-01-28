import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { LoginActions } from 'src/types/user';
import { loginEndpoint } from 'src/constants/endpoints';
import { LoginResponse } from '@src/types';
import { setAccessJwtToken, setRefreshToken } from 'src/utils/jwt';

export function* loginUser(payload: { payload: { email: string; password: string }; type: string }) {
  const { email, password } = payload.payload;
  try {
    const response: LoginResponse = yield call(
      axios.post,
      loginEndpoint,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const { id, firstName, lastName, accessToken, refreshToken } = response.data;
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

export function* watchLoginUser() {
  yield takeEvery(LoginActions.loginUser, loginUser);
}

export function* usersSaga() {
  try {
    yield all([watchLoginUser()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
