import { combineReducers } from 'redux';

import { appReducer } from 'src/redux/reducers/appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
});
