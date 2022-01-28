import { SignupActions, LoginActions } from 'src/types/user';

export const loginAction = (payload: { email: string; password: string }) => ({
  type: LoginActions.loginUser,
  payload,
});

export const signupAction = (payload: { email: string; password: string; firstName: string; lastName: string }) => ({
  type: SignupActions.signupUser,
  payload,
});
