import { takeEvery } from 'redux-saga/effects';

import { watchLoginUser } from './user';

import { LoginActions } from 'src/types/user';

export function* rootSaga() {
  yield takeEvery(LoginActions.loginUser, watchLoginUser);
}
