import { DeleteUserPostActionType } from '../../types/user';

export const deleteUserPostAction = (postID: string) => ({
  type: DeleteUserPostActionType.pending,
  postID,
});
