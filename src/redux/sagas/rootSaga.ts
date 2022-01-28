import { all, fork } from 'redux-saga/effects';

import { usersSaga } from './user';

export function* rootSaga() {
  try {
    yield all([fork(usersSaga)]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
