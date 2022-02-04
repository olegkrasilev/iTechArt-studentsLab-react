import { ChangeUserInfoActionType } from '../../types/user';

export const loadUserPostsAction = (userInfo: {
  email: string;
  firstName: string;
  lastName: string;
  userID: number | null;
}) => ({
  type: ChangeUserInfoActionType.pending,
  payload: userInfo,
});
