import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { PostsActions } from 'src/types/posts';

/*
Workers
*/

export function* loadAllPosts() {
  yield console.log('Load Posts');
}

/*
Watchers
*/

export function* watchLoadPosts() {
  yield takeEvery(PostsActions.loadPosts, loadAllPosts);
}

export function* postsSaga() {
  try {
    yield all([watchLoadPosts()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
