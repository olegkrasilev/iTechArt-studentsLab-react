import { DeleteUserPostActionType } from 'src/types/user';

export const deleteUserPostAction = (postID: string) => ({
  type: DeleteUserPostActionType.pending,
  postID,
});
