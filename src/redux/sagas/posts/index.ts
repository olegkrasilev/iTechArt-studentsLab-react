import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { allPostsEndpoint, editPostEndpoint, requestPostEndpoint, createPostEndpoint } from 'src/constants/endpoints';
import { Post, PostsActions, EditPostActionType, RequestPostActionType, CreatePostActionType } from 'src/types/posts';
import { RequestedPost } from 'src/redux/reducers/postsReducer';

/*
Workers
*/

export function* loadAllPosts(payload: { payload: { page: string }; type: string }) {
  const { page } = payload.payload;

  try {
    const response: {
      data: {
        total: number;
        posts: Post[];
      };
    } = yield call(axios.get, `${allPostsEndpoint}/${page}`, {
      params: {
        page,
      },
      withCredentials: true,
    });

    const { posts, total } = response.data;

    yield put({ type: PostsActions.loadPostsSuccess, payload: { posts, totalPostInDB: total } });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: PostsActions.loadPostsError, payload: errorMessage });
    }
  }
}

export function* editPost(payload: { payload: { postID: number; post: string | null; title: string }; type: string }) {
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

export function* requestPost(payload: { postID: string; type: string }) {
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

export function* createPost(payload: { payload: { post: string; title: string; userID: number }; type: string }) {
  const { userID, post, title } = payload.payload;
  try {
    yield call(
      axios.post,
      createPostEndpoint,
      { userID, post, title },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      },
    );

    yield put({ type: CreatePostActionType.fulfilled });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: CreatePostActionType.rejected, payload: errorMessage });
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
  yield takeEvery(EditPostActionType.pending, editPost);
}

export function* watchRequestPost() {
  yield takeEvery(RequestPostActionType.pending, requestPost);
}

export function* watchCreatePost() {
  yield takeEvery(CreatePostActionType.pending, createPost);
}

export function* postsSaga() {
  try {
    yield all([watchLoadPosts(), watchEditPost(), watchRequestPost(), watchCreatePost()]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
