import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { allPostsEndpoint } from 'src/constants/endpoints';

import { Post, PostsActions } from 'src/types/posts';

/*
Workers
*/

export function* loadAllPosts() {
  try {
    const response: {
      data: {
        posts: Post[];
      };
    } = yield call(axios.get, allPostsEndpoint, { withCredentials: true });

    const posts = response.data.posts;

    yield put({ type: PostsActions.loadPostsSuccess, payload: posts });
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
