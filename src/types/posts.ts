import { RequestedPost } from 'src/redux/reducers/postsReducer';

export interface Post {
  title: null | string;
  post: null | string;
  postCreationTime: null | Date;
  firstName: null | string;
  lastName: null | string;
  postID: null | number;
}

/*
Load Posts
*/

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

/*
Edit Post
*/

export enum EditPostActionType {
  pending = '@@EDIT_POST_PENDING',
  fulfilled = '@@DELETE_POST_FULFILLED',
  rejected = '@@DELETE_POST_REJECTED',
}

export interface EditPostActionPending {
  type: EditPostActionType.pending;
}

export interface EditPostActionFulfilled {
  type: EditPostActionType.fulfilled;
}

export interface EditPostActionRejected {
  type: EditPostActionType.rejected;
  payload: string;
}

export type EditPostActions = EditPostActionPending | EditPostActionFulfilled | EditPostActionRejected;

/*
Load requested post
*/

export enum RequestPostActionType {
  pending = '@@REQUEST_POST_PENDING',
  fulfilled = '@@REQUEST_POST_FULFILLED',
  rejected = '@@REQUEST_POST_REJECTED',
}

export interface RequestPostActionPending {
  type: RequestPostActionType.pending;
}

export interface RequestPostActionFulfilled {
  type: RequestPostActionType.fulfilled;
  payload: RequestedPost;
}

export interface RequestPostActionRejected {
  type: RequestPostActionType.rejected;
  payload: string;
}

export type RequestPostActions = RequestPostActionPending | RequestPostActionFulfilled | RequestPostActionRejected;
