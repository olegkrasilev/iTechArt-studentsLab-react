import { put, takeEvery } from 'redux-saga/effects';

import { login } from 'src/API/login';
import { loginEndpoint } from 'src/API/endpoints';
import { UserActions } from 'src/types/user';

export function* watchFetchUser(payload: { payload: { email: string; password: string }; type: string }) {
  const { email, password } = payload.payload;
  try {
    const data: { id: string; firstName: string; lastName: string; accessToken: string; refreshToken: string } =
      yield login(loginEndpoint, { email, password });

    const { id, firstName, lastName, accessToken, refreshToken } = data;
    const dataToStore = {
      userID: id,
      email,
      firstName,
      lastName,
      accessToken,
      refreshToken,
    };

    yield put({ type: UserActions.fetchUserSuccess, payload: dataToStore });
  } catch (error) {
    yield put({ type: UserActions.fetchUserSuccess, payload: error });
  }
}

export function* rootSaga() {
  yield takeEvery(UserActions.fetchUser, watchFetchUser);
}
