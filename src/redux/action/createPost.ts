import { CreatePostActionType } from 'src/types/posts';

export const createPost = (payload: { post: string; title: string; userID: number | null }) => ({
  type: CreatePostActionType.pending,
  payload,
});
