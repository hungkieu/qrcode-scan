import { createSelector } from 'reselect'
import { qrcodeInitialState } from './reducers';

const QRCodeDomain = state => state.qrcode || qrcodeInitialState;

const selectText = createSelector(
  QRCodeDomain,
  substate => substate.text,
);

const selectLoading = createSelector(
  QRCodeDomain,
  substate => substate.loading,
);

const selectResponse = createSelector(
  QRCodeDomain,
  substate => substate.response,
);

const selectError = createSelector(
  QRCodeDomain,
  substate => substate.error,
);

export {
  selectText,
  selectLoading,
  selectResponse,
  selectError
};
