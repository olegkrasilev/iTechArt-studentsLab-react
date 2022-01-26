import { call, put, takeEvery } from 'redux-saga/effects';

import { login } from 'src/API/login';
import { loginEndpoint } from 'src/API/endpoints';
import { UserActions } from 'src/types/user';
import { Response } from '@src/types';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
  ok?: boolean;
}

async function getPeople() {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  return request.json();
}

export function* watchFetchUser(payload: { payload: { email: string; password: string }; type: string }) {
  try {
    const data: ReturnType<typeof getPeople> = yield call(getPeople);

    console.log(data);

    yield put({ type: UserActions.fetchUserSuccess, payload: data });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      console.log(errorMessage);

      yield put({ type: UserActions.fetchUserError, payload: errorMessage });
    }
  }

  // const { email, password } = payload.payload;
  // try {
  //   const response: ResponseGenerator = yield login(loginEndpoint, { email, password });
  //   if (!response.ok) {
  //     throw new Error('Something went wrong... Please try again');
  //   }
  //   const userData = response as Promise<globalThis.Response>;
  //   userData.then(result => console.log(result)).catch();
  //   yield put({ type: UserActions.fetchUserSuccess, payload });
  // } catch (error) {
  //   if (error instanceof Error) {
  //     const errorMessage = error.message;
  //     yield put({ type: UserActions.fetchUserError, payload: errorMessage });
  //   }
  // }
}

export function* rootSaga() {
  yield takeEvery(UserActions.fetchUser, watchFetchUser);
}
