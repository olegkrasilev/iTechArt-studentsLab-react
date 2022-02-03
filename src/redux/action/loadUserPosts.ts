import { LoadUserPostsAction } from 'src/types/user';

export const loadUserPostsAction = (userId: number | null) => ({
  type: LoadUserPostsAction.loadUserPost,
  payload: userId,
});
