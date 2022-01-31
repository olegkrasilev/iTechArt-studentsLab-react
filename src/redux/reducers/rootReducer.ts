import { combineReducers } from 'redux';

import { postsReducer } from './postsReducer';

import { userReducer } from 'src/redux/reducers/userReducer';

export const rootReducer = combineReducers({
  app: userReducer,
  posts: postsReducer,
});
