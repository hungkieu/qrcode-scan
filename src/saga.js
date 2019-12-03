import { checkQRCodeSuccess, checkQRCodeFailure } from './pages/QRCode/actions';
import { selectText } from './pages/QRCode/selectors';
import { CHECK_QRCODE } from './pages/QRCode/constants';
import { all, put, select, takeLatest, fork } from 'redux-saga/effects';

function* checkQRCode() {
  const url = localStorage.getItem('settings.url') || '';
  const text = yield select(selectText);
  const data = { text };

  try {
    const response = yield fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json());

    yield put(checkQRCodeSuccess(response));
  } catch (err) {
    yield put(checkQRCodeFailure(err.message));
  }
}

function* checkQRCodeWatcher() {
  yield takeLatest(CHECK_QRCODE, checkQRCode);
}

function* rootSaga() {
  yield all([
    fork(checkQRCodeWatcher),
  ]);
}

export default rootSaga;
