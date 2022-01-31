import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { allPostsEndpoint } from 'src/constants/endpoints';

import { PostsActions } from 'src/types/posts';

/*
Workers
*/

export function* loadAllPosts() {
  try {
    const response: { data: string } = yield call(axios.get, allPostsEndpoint, { withCredentials: true });

    console.log(response.data);
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: PostsActions.loadPostsError, payload: errorMessage });
    }
  }
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
