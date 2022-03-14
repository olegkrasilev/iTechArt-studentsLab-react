import { RequestPostActionType } from 'src/types/posts';

export const requestUserPost = (postID: string) => ({
  type: RequestPostActionType.pending,
  postID,
});
