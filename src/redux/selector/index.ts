import { Store } from 'src/types/index';

export const selectIsUserAuthorized = (store: Store) => store.app.user.isAuthorized;

export const selectUserError = (store: Store) => store.app.user.error;

export const selectAllUsersPosts = (store: Store) => store.posts.posts;

export const selectIsUsersPostsLoading = (store: Store) => store.posts.loading;
