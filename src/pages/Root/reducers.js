import { SELECT_MENU_ITEM } from './constants';

export const rootInitialState = {
  key: 'scan',
};

const rootReducer = (state = rootInitialState, action) => {
  let draftState;

  switch(action.type) {
    case SELECT_MENU_ITEM:
      draftState = {
        ...state,
        key: action.key,
      }
      break;
    default:
      draftState = {...state};
      break;
  }
  return draftState;
}

export default rootReducer;