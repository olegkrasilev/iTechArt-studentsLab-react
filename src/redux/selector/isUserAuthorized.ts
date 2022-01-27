import { Store } from 'src/types/index';

export const selectIsUserAuthorized = (store: Store) => store.app.user.isAuthorized;
