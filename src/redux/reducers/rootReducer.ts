import { combineReducers } from 'redux';

import { userReducer } from 'src/redux/reducers/userReducer';

export const rootReducer = combineReducers({
  app: userReducer,
});
