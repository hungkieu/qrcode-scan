import {
  CHANGE_TEXT,
  CHECK_QRCODE,
  CHECK_QRCODE_SUCCESS,
  CHECK_QRCODE_FAILURE,
  RESET_STATE
} from './constants';

export const changeText = text => {
  return {
    type: CHANGE_TEXT,
    text
  };
};

export const checkQRCode = () => {
  return {
    type: CHECK_QRCODE,
  };
};

export const checkQRCodeSuccess = (response) => {
  return {
    type: CHECK_QRCODE_SUCCESS,
    response,
  };
};


export const checkQRCodeFailure = (error) => {
  return {
    type: CHECK_QRCODE_FAILURE,
    error,
  };
};

export const resetState = () => {
  return {
    type: RESET_STATE,
  };
};
