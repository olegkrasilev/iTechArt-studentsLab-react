import { Store } from 'src/types/index';

export const selectIsUserAuthorized = (store: Store) => store.user.isAuthorized;

export const selectUserError = (store: Store) => store.user.error;

export const selectAllUsersPosts = (store: Store) => store.posts.posts;

export const selectUserId = (store: Store) => store.user.id;

export const selectCurrentUserPosts = (store: Store) => store.user.posts;

export const selectIsUsersPostsLoading = (store: Store) => store.posts.loading;

export const selectIsUserLoading = (store: Store) => store.user.loading;

export const selectIsAllUsersLoading = (store: Store) => store.users.loading;

export const selectALlUsers = (store: Store) => store.users.users;
