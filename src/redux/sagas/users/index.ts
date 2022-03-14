import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { getAccessJwtToken } from 'src/utils/jwt';

import { allUsersEndpoint } from 'src/constants/endpoints';
import { User, UsersActions, GetRequestedUserInfoType } from 'src/types/users';

/*
Workers
*/

export function* loadUsers(payload: { payload: { page: string }; type: string }) {
  const page = payload.payload;
  const accessToken = getAccessJwtToken();

  try {
    const response: {
      data: {
        users: User[];
        total: number;
      };
    } = yield call(axios.get, `${allUsersEndpoint}/${page}`, {
      params: { page },
      withCredentials: true,
      headers: { Authorization: `Bearer ${accessToken}` },
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

export function* getRequestedUserInfo(payload: {
  payload: {
    userID: number;
  };
  type: string;
}) {
  const { userID } = payload.payload;
  try {
    yield put({ type: GetRequestedUserInfoType.fulfilled, payload: userID });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: GetRequestedUserInfoType.rejected, payload: errorMessage });
    }
  }
}

/*
Watchers
*/

export function* watchLoadUsers() {
  yield takeEvery(UsersActions.loadUsers, loadUsers);
}

export function* watchGetRequestedUserInfo() {
  yield takeEvery(GetRequestedUserInfoType.pending, getRequestedUserInfo);
}

export function* usersSaga() {
  try {
    yield all([watchLoadUsers(), watchGetRequestedUserInfo()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
