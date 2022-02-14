import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { allUsersEndpoint } from 'src/constants/endpoints';
import { User, UsersActions } from 'src/types/users';

/*
Workers
*/

export function* loadUsers(payload: { payload: { page: string }; type: string }) {
  const page = payload.payload;

  try {
    const response: {
      data: {
        users: User[];
        total: number;
      };
    } = yield call(axios.get, `${allUsersEndpoint}/${page}`, {
      params: { page },
      withCredentials: true,
    });

    const { total, users } = response.data;

    yield put({ type: UsersActions.loadUserSuccess, payload: { users, totalUsersInDB: total } });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: UsersActions.loadUsersError, payload: errorMessage });
    }
  }
}

/*
Watchers
*/

export function* watchLoadUsers() {
  yield takeEvery(UsersActions.loadUsers, loadUsers);
}

export function* usersSaga() {
  try {
    yield all([watchLoadUsers()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
