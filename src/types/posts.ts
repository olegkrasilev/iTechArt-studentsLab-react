export interface Post {
  title: null | string;
  post: null | string;
  postCreationTime: null | Date;
  firstName: null | string;
  lastName: null | string;
  postID: null | number;
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
  payload: Post[];
}

export interface LoadPostsErrorAction {
  type: PostsActions.loadPostsError;
  payload: string;
}

export type LoadPostsActions = LoadPostsAction | LoadPostsSuccessAction | LoadPostsErrorAction;
