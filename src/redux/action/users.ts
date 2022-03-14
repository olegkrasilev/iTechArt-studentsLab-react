import { UsersActions } from 'src/types/users';

export const loadUsersAction = (page: string | undefined) => ({
  type: UsersActions.loadUsers,
  payload: page,
});
