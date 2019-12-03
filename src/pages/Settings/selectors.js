import { createSelector } from 'reselect'
import { settingInitialState } from './reducers';

const SettingDomain = state => state.settings || settingInitialState;

const selectURL = createSelector(
  SettingDomain,
  substate => substate.url,
);

export {
  selectURL,
};