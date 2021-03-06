import { RequestedPost } from 'src/redux/reducers/postsReducer';

export interface Post {
  title: string;
  post: string;
  postCreationTime: Date;
  firstName: string;
  lastName: string;
  postID: number;
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
  payload: {
    posts: Post[];
    totalPostInDB: number;
  };
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

/*
Create post
*/

export enum CreatePostActionType {
  pending = '@@CREATE_POST_PENDING',
  fulfilled = '@@CREATE_POST_FULFILLED',
  rejected = '@@CREATE_POST_REJECTED',
}

export interface CreatePostActionPending {
  type: CreatePostActionType.pending;
}

export interface CreatePostActionFulfilled {
  type: CreatePostActionType.fulfilled;
}

export interface CreatePostActionRejected {
  type: CreatePostActionType.rejected;
  payload: string;
}

export type CreatePostActions = CreatePostActionPending | CreatePostActionFulfilled | CreatePostActionRejected;
