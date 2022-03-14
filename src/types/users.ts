export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

/*
Load Users
*/
export enum UsersActions {
  loadUsers = '@@LOAD_USERS',
  loadUserSuccess = '@@LOAD_USERS_SUCCESS',
  loadUsersError = '@@LOAD_USER_ERROR',
}

export interface LoadUsersAction {
  type: UsersActions.loadUsers;
}

export interface LoadUsersSuccessAction {
  type: UsersActions.loadUserSuccess;
  payload: { users: User[]; totalUsersInDB: number };
}

export interface LoadUsersErrorAction {
  type: UsersActions.loadUsersError;
  payload: string;
}

export type LoadUsersActions = LoadUsersAction | LoadUsersSuccessAction | LoadUsersErrorAction;

/*
GetRequestedUserInfo
*/

export enum GetRequestedUserInfoType {
  pending = '@@GET_REQUESTED_USER_INFO_PENDING',
  fulfilled = '@@GET_REQUESTED_USER_INFO_FULFILLED',
  rejected = '@@GET_REQUESTED_USER_INFO_REJECTED',
}

export interface GetRequestedUserInfoPending {
  type: GetRequestedUserInfoType.pending;
}

export interface GetRequestedUserInfoFulfilled {
  type: GetRequestedUserInfoType.fulfilled;
  payload: number;
}

export interface GetRequestedUserInfoRejected {
  type: GetRequestedUserInfoType.rejected;
  payload: string;
}

export type GetRequestedUserInfoActions =
  | GetRequestedUserInfoPending
  | GetRequestedUserInfoFulfilled
  | GetRequestedUserInfoRejected;
