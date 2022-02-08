import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { TakeableChannel } from 'redux-saga';

import { allPostsEndpoint, editPostEndpoint, requestPostEndpoint } from 'src/constants/endpoints';
import { Post, PostsActions, EditPostActionType, RequestPostActionType } from 'src/types/posts';
import { RequestedPost } from 'src/redux/reducers/postsReducer';

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

export function* requestPost(payload: { postID: string }) {
  const { postID } = payload;
  try {
    const response: {
      data: RequestedPost;
    } = yield call(axios.get, `${requestPostEndpoint}/${postID}`, {
      params: {
        postID,
      },
      withCredentials: true,
    });

    yield put({ type: RequestPostActionType.fulfilled, payload: response.data });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: RequestPostActionType.rejected, payload: errorMessage });
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

export function* watchRequestPost() {
  yield takeEvery(RequestPostActionType.pending as unknown as TakeableChannel<unknown>, requestPost);
}

export function* postsSaga() {
  try {
    yield all([watchLoadPosts(), watchEditPost(), watchRequestPost()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
