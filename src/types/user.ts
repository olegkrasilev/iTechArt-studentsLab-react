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
