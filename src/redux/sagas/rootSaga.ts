import { takeEvery } from 'redux-saga/effects';

import { watchLoginUser } from './user';

import { UserActions } from 'src/types/user';

export function* rootSaga() {
  yield takeEvery(UserActions.fetchUser, watchLoginUser);
}
