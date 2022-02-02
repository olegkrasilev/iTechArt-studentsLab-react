import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { allUsersEndpoint } from 'src/constants/endpoints';
import { User, UsersActions } from 'src/types/users';

/*
Workers
*/

export function* loadUsers() {
  try {
    const response: {
      data: {
        users: User[];
      };
    } = yield call(axios.get, allUsersEndpoint, { withCredentials: true });

    const users = response.data.users;

    yield put({ type: UsersActions.loadUserSuccess, payload: users });
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
