import { all, fork } from 'redux-saga/effects';

import { postsSaga } from './posts';
import { usersSaga } from './user';

export function* rootSaga() {
  try {
    yield all([fork(usersSaga), fork(postsSaga)]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
