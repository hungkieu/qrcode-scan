import { createSelector } from 'reselect'
import { rootInitialState } from './reducers';

const RootDomain = state => state.root || rootInitialState;

const selectKey = createSelector(
  RootDomain,
  root => root.key,
);

export {
  selectKey,
};