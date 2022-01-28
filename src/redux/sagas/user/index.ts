import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { SignupResponse, LoginResponse } from '../../../types/index';

import { LoginActions, SignupActions } from 'src/types/user';
import { loginEndpoint, signUpEndpoint } from 'src/constants/endpoints';
import { setAccessJwtToken, setRefreshToken } from 'src/utils/jwt';

/*
Workers
*/

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

export function* signupUser(payload: {
  payload: { email: string; password: string; firstName: string; lastName: string };
  type: string;
}) {
  const { email, password, firstName, lastName } = payload.payload;
  try {
    const response: SignupResponse = yield call(
      axios.post,
      signUpEndpoint,
      { email, password, firstName, lastName },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { accessToken, refreshToken, id } = response.data;
    const dataToStore = { id, email, firstName, lastName };

    if (!(accessToken && refreshToken)) {
      throw new Error('Please try again');
    }

    setAccessJwtToken(accessToken);
    setRefreshToken(refreshToken);
    yield put({ type: SignupActions.signupUserSuccess, payload: dataToStore });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: SignupActions.signupUserError, payload: errorMessage });
    }
  }
}

/*
Watchers
*/

export function* watchLoginUser() {
  yield takeEvery(LoginActions.loginUser, loginUser);
}

export function* watchSignupUser() {
  yield takeEvery(SignupActions.signupUser, signupUser);
}

export function* usersSaga() {
  try {
    yield all([watchLoginUser(), watchSignupUser()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
