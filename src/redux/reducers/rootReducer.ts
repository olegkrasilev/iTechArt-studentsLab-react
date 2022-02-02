import { combineReducers } from 'redux';

import { postsReducer } from 'src/redux/reducers/postsReducer';
import { usersReducer } from 'src/redux/reducers/usersReducer';
import { userReducer } from 'src/redux/reducers/userReducer';

export const rootReducer = combineReducers({
  app: userReducer,
  posts: postsReducer,
  users: usersReducer,
});
