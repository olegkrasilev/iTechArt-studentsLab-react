import { call, put, takeEvery } from 'redux-saga/effects';

import { login } from 'src/API/login';
import { loginEndpoint } from 'src/API/endpoints';
import { UserActions } from 'src/types/user';
import { LoginResponse } from '@src/types';

export function* watchFetchUser(payload: { payload: { email: string; password: string }; type: string }) {
  const { email, password } = payload.payload;
  try {
    const data: ReturnType<typeof login> = yield call(login, loginEndpoint, { email, password });
    const { id, firstName, lastName, accessToken, refreshToken } = data as unknown as LoginResponse;
    const dataToStore = { id, email, firstName, lastName };

    if (!(accessToken && refreshToken)) {
      throw new Error('Please try again');
    }

    yield put({ type: UserActions.fetchUserSuccess, payload: dataToStore });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: UserActions.fetchUserError, payload: errorMessage });
    }
  }
}

export function* rootSaga() {
  yield takeEvery(UserActions.fetchUser, watchFetchUser);
}
