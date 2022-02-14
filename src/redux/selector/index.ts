import { createSelector } from 'reselect';

import { Store } from 'src/types/index';

// user
const userState = (store: Store) => store.user;

export const selectIsUserAuthorized = createSelector(userState, state => state.isAuthorized);

export const selectUserError = createSelector(userState, state => state.error);

export const selectUserId = createSelector(userState, state => state.id);

export const selectCurrentUserPosts = createSelector(userState, state => state.posts);

export const selectIsUserLoading = createSelector(userState, state => state.loading);

export const selectUserEmail = createSelector(userState, state => state.email);

export const selectUserFirstName = createSelector(userState, state => state.firstName);

export const selectUserLastName = createSelector(userState, state => state.lastName);

export const selectUsersTotalPostInDB = createSelector(userState, state => state.totalPostInDB);

// posts

const postsState = (store: Store) => store.posts;

export const selectAllUsersPosts = createSelector(postsState, posts => posts.posts);

export const selectIsPostsLoading = createSelector(postsState, posts => posts.loading);

export const selectRequestedPost = createSelector(postsState, posts => posts.requestedPost);

export const selectTotalPostInDB = createSelector(postsState, posts => posts.totalPostInDB);

// Users

const usersState = (store: Store) => store.users;

export const selectIsAllUsersLoading = createSelector(usersState, users => users.loading);

export const selectALlUsers = createSelector(usersState, users => users.users);
