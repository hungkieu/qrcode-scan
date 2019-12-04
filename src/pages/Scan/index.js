import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Icon } from 'antd';
import { withRouter } from 'react-router';
import './style.css';

import {
  changeText as qrcodeChangeTextAction,
  resetState as qrcodeResetStateAction
} from '../QRCode/actions';
import { selectMenuItem as rootSelectMenuItemAction } from '../Root/actions';

const Scan = ({ history }) => {
  const dispatch = useDispatch();

  const scanSuccess = (err, text) => {
    if (err) {
      alert(err._message);
    } else {
      dispatch(qrcodeResetStateAction());
      dispatch(qrcodeChangeTextAction(text));
      dispatch(rootSelectMenuItemAction('qrcode'));
      goToQRCode();
      canncelScan();
    }
  };

  const startScan = () => {
    if (window.QRScanner) {
      const QRScanner = window.QRScanner;
      QRScanner.prepare();
      QRScanner.scan(scanSuccess);
      QRScanner.show();
    }
  };

  const canncelScan = () => {
    if (window.QRScanner) {
      const QRScanner = window.QRScanner;
      QRScanner.hide();
    }
  };

  const goToQRCode = () => {
    dispatch(rootSelectMenuItemAction('qrcode'));
    history.push('/qrcode');
  };

  useEffect(() => {
    startScan();
  });

  return (
    <div className="Scan">
      <Icon type="scan" style={{ fontSize: '2rem' }} />
    </div>
  );
};

export default withRouter(Scan);
