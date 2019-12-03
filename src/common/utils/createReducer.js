import { combineReducers } from 'redux';
import rootReducer from '../../pages/Root/reducers';

export default (injectedReducers = {}) => {
  return combineReducers({
    root: rootReducer,
    ...injectedReducers,
  });
};