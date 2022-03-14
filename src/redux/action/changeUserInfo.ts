import { ChangeUserInfoActionType } from 'src/types/user';

export const changeUserInfoAction = (userInfo: {
  email: string;
  firstName: string;
  lastName: string;
  userID: number | null;
}) => ({
  type: ChangeUserInfoActionType.pending,
  payload: userInfo,
});
