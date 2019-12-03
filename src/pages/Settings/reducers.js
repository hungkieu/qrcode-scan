import { CHANGE_URL } from './constants';

export const settingInitialState = {
  url: localStorage.getItem('settings.url') || '',
};

const settingReducer = (state = settingInitialState, action) => {
  let draftState;

  switch(action.type) {
    case CHANGE_URL:
      draftState = {
        ...state,
        url: action.url,
      }
      break;
    default:
      draftState = {...state};
      break;
  }
  return draftState;
}

export default settingReducer;
