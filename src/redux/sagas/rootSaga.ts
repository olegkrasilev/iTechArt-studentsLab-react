import { actionChannel, put, take, takeEvery } from 'redux-saga/effects';

import { login } from '../../API/login';
import { loginEndpoint } from '../../API/endpoints';
import { UserActions } from '../../types/user';

export function* workerSaga() {
  // fetch here must be function
}

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
  // import action type
  yield takeEvery('FETCH_USER', watchFetchUser);
}
