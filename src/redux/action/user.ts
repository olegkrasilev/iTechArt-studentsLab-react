import { LoginActions } from 'src/types/user';

export const loginAction = (payload: { email: string; password: string }) => ({
  type: LoginActions.loginUser,
  payload,
});
