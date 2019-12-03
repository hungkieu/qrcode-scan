import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './createReducer';

import rootSaga from '../../saga';

export default (intialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(createReducer(), intialState, applyMiddleware(sagaMiddleware));
  
  sagaMiddleware.run(rootSaga);
  
  const configuredStore = {
    ...store,
    injectedReducers: {},
  };

  return configuredStore;
}
