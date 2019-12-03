import createReducer from './createReducer';

export default (store, key, reducer) => {
  if (
      store &&
      store.injectedReducers &&
      store.injectedReducers[key] === reducer
  ) {
    return;
  }
  store.injectedReducers[key] = reducer;
  store.replaceReducer(createReducer(store.injectedReducers));
}
