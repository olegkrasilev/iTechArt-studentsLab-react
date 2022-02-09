import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import {
  ChangeUserInfoActionType,
  LogoutActions,
  LoginActions,
  SignupActions,
  LoadUserPostsAction,
  DeleteUserPostActionType,
} from 'src/types/user';

import { SignupResponse, LoginResponse } from 'src/types/index';
import {
  loginEndpoint,
  signUpEndpoint,
  logoutEndpoint,
  allUserPostsEndpoint,
  updateUserEndpoint,
  deleteUserPostEndpoint,
} from 'src/constants/endpoints';
import { setAccessJwtToken, setRefreshToken } from 'src/utils/jwt';

/*
Workers
*/

export function* loginUser(payload: { payload: { email: string; password: string }; type: string }) {
  const { email, password } = payload.payload;
  try {
    const response: LoginResponse = yield call(
      axios.post,
      loginEndpoint,
      { email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { id, firstName, lastName, accessToken, refreshToken } = response.data;

    setAccessJwtToken(accessToken);
    setRefreshToken(refreshToken);
    yield put({ type: LoginActions.loginUserSuccess, payload: { id, email, firstName, lastName } });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: LoginActions.loginUserError, payload: errorMessage });
    }
  }
}

export function* signupUser(payload: {
  payload: { email: string; password: string; firstName: string; lastName: string };
  type: string;
}) {
  const { email, password, firstName, lastName } = payload.payload;
  try {
    const response: SignupResponse = yield call(
      axios.post,
      signUpEndpoint,
      { email, password, firstName, lastName },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { accessToken, refreshToken, id } = response.data;

    if (!(accessToken && refreshToken)) {
      throw new Error('Please try again');
    }

    setAccessJwtToken(accessToken);
    setRefreshToken(refreshToken);
    yield put({ type: SignupActions.signupUserSuccess, payload: { id, email, firstName, lastName } });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: SignupActions.signupUserError, payload: errorMessage });
    }
  }
}

export function* logoutUser() {
  try {
    const response: { status: number } = yield call(axios.post, logoutEndpoint, {}, { withCredentials: true });

    if (response.status === 204) {
      yield put({ type: LogoutActions.logoutUserSuccess });
    }
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: LogoutActions.logoutUserError, payload: errorMessage });
    }
  }
}

export function* loadUserPosts(data: { payload: number; type: string }) {
  const userID = data.payload;
  try {
    const response: {
      data: {
        posts: { title: string; post: string; postCreationTime: Date; id: number }[];
      };
    } = yield call(axios.get, `${allUserPostsEndpoint}/${userID}`, {
      params: {
        userID,
      },
      withCredentials: true,
    });

    yield put({ type: LoadUserPostsAction.loadUserPostSuccess, payload: response.data.posts });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: LoadUserPostsAction.loadUserPostError, payload: errorMessage });
    }
  }
}

export function* changeUserInfo(payload: {
  payload: { userID: number; firstName: string; lastName: string; email: string };
  type: string;
}) {
  const { email, firstName, lastName, userID } = payload.payload;
  try {
    const response: { data: { firstName: string; lastName: string; newEmail: string } } = yield call(
      axios.patch,
      updateUserEndpoint,
      { email, firstName, lastName, userID },
      { withCredentials: true },
    );

    yield put({
      type: ChangeUserInfoActionType.fulfilled,
      payload: { firstName: response.data.firstName, lastName: response.data.lastName, email: response.data.newEmail },
    });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: ChangeUserInfoActionType.rejected, payload: errorMessage });
    }
  }
}

export function* deleteUserPost(payload: { type: string; postID: string }) {
  const { postID } = payload;
  try {
    yield axios.delete(deleteUserPostEndpoint, {
      data: { postID },
      withCredentials: true,
    });

    yield put({ type: DeleteUserPostActionType.fulfilled });
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = error.message;

      yield put({ type: DeleteUserPostActionType.rejected, payload: errorMessage });
    }
  }
}

/*
Watchers
*/

export function* watchLoginUser() {
  yield takeEvery(LoginActions.loginUser, loginUser);
}

export function* watchSignupUser() {
  yield takeEvery(SignupActions.signupUser, signupUser);
}

export function* watchLogoutUser() {
  yield takeEvery(LogoutActions.logoutUser, logoutUser);
}

export function* watchLoadUserPosts() {
  yield takeEvery(LoadUserPostsAction.loadUserPost, loadUserPosts);
}

export function* watchChangeUserInfo() {
  yield takeEvery(ChangeUserInfoActionType.pending, changeUserInfo);
}

export function* watchDeleteUserPost() {
  yield takeEvery(DeleteUserPostActionType.pending, deleteUserPost);
}

export function* userSaga() {
  try {
    yield all([
      watchLoginUser(),
      watchSignupUser(),
      watchLogoutUser(),
      watchLoadUserPosts(),
      watchChangeUserInfo(),
      watchDeleteUserPost(),
    ]);
  } catch (error) {
    // TODO create store app error field
    console.error(error);
  }
}
