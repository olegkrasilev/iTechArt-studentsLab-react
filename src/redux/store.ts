import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'src/redux/reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
