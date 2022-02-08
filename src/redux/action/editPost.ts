import { EditPostActionType } from '../../types/posts';

export const editPostsAction = (payload: { postID: number; post: string | null; title: string }) => ({
  type: EditPostActionType.pending,
  payload,
});
