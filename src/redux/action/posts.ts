import { Params } from 'react-router-dom';

import { PostsActions } from 'src/types/posts';

export const loadPostsAction = (payload: Readonly<Params>) => ({
  type: PostsActions.loadPosts,
  payload,
});
