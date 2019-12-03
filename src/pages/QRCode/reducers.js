import {
  CHANGE_TEXT,
  CHECK_QRCODE,
  CHECK_QRCODE_SUCCESS,
  CHECK_QRCODE_FAILURE,
  RESET_STATE
} from './constants';

export const qrcodeInitialState = {
  text: '',
  loading: false,
  response: '',
  error: ''
};

const qrcodeReducer = (state = qrcodeInitialState, action) => {
  let draftState;

  switch (action.type) {
    case CHANGE_TEXT:
      draftState = {
        ...state,
        text: action.text
      };
      break;
    case CHECK_QRCODE:
      draftState = {
        ...state,
        loading: true
      };
      break;
    case CHECK_QRCODE_SUCCESS:
      draftState = {
        ...state,
        loading: false,
        response: action.response,
        error: ''
      };
      break;
    case CHECK_QRCODE_FAILURE:
      draftState = {
        ...state,
        loading: false,
        response: '',
        error: action.error,
      };
      break;
    case RESET_STATE:
      draftState = qrcodeInitialState;
      break;
    default:
      draftState = { ...state };
      break;
  }
  return draftState;
};

export default qrcodeReducer;
