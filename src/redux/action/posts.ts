import { PostsActions } from 'src/types/posts';

export const loadPostsAction = (payload: string) => ({
  type: PostsActions.loadPosts,
  payload,
});
