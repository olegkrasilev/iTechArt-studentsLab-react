import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { TakeableChannel } from 'redux-saga';

import { allPostsEndpoint, editPostEndpoint } from 'src/constants/endpoints';

import { Post, PostsActions, EditPostActionType } from 'src/types/posts';

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

export function* editPost(payload: { payload: { postID: number; post: string | null; title: string } }) {
  const { post, postID, title } = payload.payload;
  try {
    yield call(axios.patch, editPostEndpoint, { postID, post, title }, { withCredentials: true });
    yield put({ type: EditPostActionType.fulfilled });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: EditPostActionType.rejected, payload: errorMessage });
    }
  }
}
/*
Watchers
*/

export function* watchLoadPosts() {
  yield takeEvery(PostsActions.loadPosts, loadAllPosts);
}

export function* watchEditPost() {
  yield takeEvery(EditPostActionType.pending as unknown as TakeableChannel<unknown>, editPost);
}

export function* postsSaga() {
  try {
    yield all([watchLoadPosts(), watchEditPost()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
