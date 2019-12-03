import {
  SELECT_MENU_ITEM,
} from './constants';

export const selectMenuItem = (key) => {
  return {
    type: SELECT_MENU_ITEM,
    key,
  };
};
