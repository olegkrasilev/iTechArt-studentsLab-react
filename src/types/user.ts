export enum UserActions {
  fetchUser = 'FETCH_USER',
  fetchUserSuccess = 'FETCH_USER_SUCCESS',
  fetchUserError = 'FETCH_USER_ERROR',
}

export interface FetchUserAction {
  type: UserActions.fetchUser;
}

export interface FetchUserSuccessAction {
  type: UserActions.fetchUserSuccess;
  payload: {
    userID: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface FetchUserErrorAction {
  type: UserActions.fetchUserError;
  payload: string;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccessAction;
