import { Post } from 'src/types/posts';

/*
User payload type
*/
export interface UserPayload {
  userID: string;
  email: string;
  firstName: string;
  lastName: string;
  accessToken: string;
  refreshToken: string;
}
/*
Login types
*/

export enum LoginActions {
  loginUser = '@@LOGIN_USER',
  loginUserSuccess = '@@LOGIN_USER_SUCCESS',
  loginUserError = '@@LOGIN_USER_ERROR',
}

export interface LoginUserAction {
  type: LoginActions.loginUser;
}

export interface LoginUserSuccessAction {
  type: LoginActions.loginUserSuccess;
  payload: UserPayload;
}

export interface LoginUserErrorAction {
  type: LoginActions.loginUserError;
  payload: string;
}

export type LoginUserActions = LoginUserAction | LoginUserErrorAction | LoginUserSuccessAction;

/*
signup types
*/

export enum SignupActions {
  signupUser = '@@SIGNUP_USER',
  signupUserSuccess = '@@SIGNUP_USER_SUCCESS',
  signupUserError = '@@SIGNUP_USER_ERROR',
}

export interface SignupUserAction {
  type: SignupActions.signupUser;
}

export interface SignupUserSuccessAction {
  type: SignupActions.signupUserSuccess;
  payload: UserPayload;
}

export interface SignupUserErrorAction {
  type: SignupActions.signupUserError;
  payload: string;
}

export type SignupUserActions = SignupUserAction | SignupUserSuccessAction | SignupUserErrorAction;

/*
logout types
*/

export enum LogoutActions {
  logoutUser = '@@LOGOUT_USER',
  logoutUserSuccess = '@@LOGOUT_USER_SUCCESS',
  logoutUserError = '@@LOGOUT_USER_ERROR',
}

export interface LogoutUserAction {
  type: LogoutActions.logoutUser;
}

export interface LogoutUserSuccessAction {
  type: LogoutActions.logoutUserSuccess;
  payload: UserPayload;
}

export interface LogoutUserErrorAction {
  type: LogoutActions.logoutUserError;
  payload: string;
}

export type LogoutUserActions = LogoutUserAction | LogoutUserSuccessAction | LogoutUserErrorAction;

/*
load User Posts types
*/

export enum LoadUserPostsAction {
  loadUserPost = '@@LOAD_USER_POSTS',
  loadUserPostSuccess = '@@LOAD_USER_POST_SUCCESS',
  loadUserPostError = '@@LOGOUT_USER_ERROR',
}

export interface LoadUserPosts {
  type: LoadUserPostsAction.loadUserPost;
}

export interface LoadUserPostSuccess {
  type: LoadUserPostsAction.loadUserPostSuccess;
  payload: Post[];
}

export interface LoadUserPostsError {
  type: LoadUserPostsAction.loadUserPostError;
  payload: string;
}

export type LoadUserPostsActions = LoadUserPosts | LoadUserPostSuccess | LoadUserPostsError;

/*
Account edit info
*/

export enum ChangeUserInfoActionType {
  pending = '@@CHANGE_USER_INFO_PENDING',
  fulfilled = '@@CHANGE_USER_INFO_FULFILLED',
  rejected = '@@CHANGE_USER_INFO_REJECTED',
}

export interface ChangeUserInfoActionPending {
  type: ChangeUserInfoActionType.pending;
}

export interface ChangeUserInfoActionFulfilled {
  type: ChangeUserInfoActionType.fulfilled;
  payload: { email: string; firstName: string; lastName: string };
}

export interface ChangeUserInfoActionRejected {
  type: ChangeUserInfoActionType.rejected;
  payload: string;
}

export type ChangeUserInfoActions =
  | ChangeUserInfoActionPending
  | ChangeUserInfoActionFulfilled
  | ChangeUserInfoActionRejected;

/*
  Delete user post
*/

export enum DeleteUserPostActionType {
  pending = '@@DELETE_USER_POST_PENDING',
  fulfilled = '@@DELETE_USER_POST_FULFILLED',
  rejected = '@@DELETE_USER_POST_REJECTED',
}

export interface DeleteUserPostActionPending {
  type: DeleteUserPostActionType.pending;
}

export interface DeleteUserPostActionFulfilled {
  type: DeleteUserPostActionType.fulfilled;
}

export interface DeleteUserPostActionRejected {
  type: DeleteUserPostActionType.rejected;
  payload: string;
}

export type DeleteUserPostActions =
  | DeleteUserPostActionPending
  | DeleteUserPostActionFulfilled
  | DeleteUserPostActionRejected;
