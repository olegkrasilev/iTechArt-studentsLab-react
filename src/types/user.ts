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
  payload: {
    userID: string;
    email: string;
    firstName: string;
    lastName: string;
    accessToken: string;
    refreshToken: string;
  };
}

export interface LoginUserErrorAction {
  type: LoginActions.loginUserError;
  payload: string;
}

export type LoginUserActions = LoginUserAction | LoginUserErrorAction | LoginUserSuccessAction;
