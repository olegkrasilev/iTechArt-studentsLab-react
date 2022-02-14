export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

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
