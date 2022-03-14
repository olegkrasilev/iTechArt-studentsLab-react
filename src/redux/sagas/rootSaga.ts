import { all, fork } from 'redux-saga/effects';

import { postsSaga } from 'src/redux/sagas/posts';
import { userSaga } from 'src/redux/sagas/user';
import { usersSaga } from 'src/redux/sagas/users';

export function* rootSaga() {
  try {
    yield all([fork(userSaga), fork(postsSaga), fork(usersSaga)]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
