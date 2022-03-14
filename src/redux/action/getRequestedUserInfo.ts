import { GetRequestedUserInfoType } from 'src/types/users';

export const getRequestedUserInfo = (payload: { userID: number }) => ({
  type: GetRequestedUserInfoType.pending,
  payload,
});
