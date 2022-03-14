import { Params } from 'react-router-dom';

import { LoadUserPostsAction } from 'src/types/user';

export const loadUserPostsAction = (payload: { userId: number | null; page: Readonly<Params<string>> }) => ({
  type: LoadUserPostsAction.loadUserPost,
  payload,
});
