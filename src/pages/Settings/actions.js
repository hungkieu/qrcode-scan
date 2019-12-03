import { CHANGE_URL } from './constants';

export const changeURL = (url) => {
  return {
    type: CHANGE_URL,
    url,
  }
}