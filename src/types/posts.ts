import { UserPayload } from './user';

interface PostsPayload {
  id: number;
  title: string;
  post: string;
  postCreationTime: Date;
  user: UserPayload[];
}

export enum PostsActions {
  loadPosts = '@@LOAD_POSTS',
  loadPostsSuccess = '@@LOAD_POSTS_SUCCESS',
  loadPostsError = '@@LOAD_POSTS_ERROR',
}

export interface LoadPostsAction {
  type: PostsActions.loadPosts;
}

export interface LoadPostsSuccessAction {
  type: PostsActions.loadPostsSuccess;
  payload: PostsPayload;
}

export interface LoadPostsErrorAction {
  type: PostsActions.loadPostsError;
  payload: string;
}

export type LoadPostsActions = LoadPostsAction | LoadPostsSuccessAction | LoadPostsErrorAction;
