import { UserActions } from 'src/types/user';

export const loginAction = (payload: { email: string; password: string }) => ({
  type: UserActions.fetchUser,
  payload,
});
