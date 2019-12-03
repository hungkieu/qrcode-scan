import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Layout, Button, Result, Skeleton } from 'antd';
import useInjectReducer from '../../common/utils/useInjectReducer';

import './style.css';
import reducer from './reducers';
import { checkQRCode, resetState } from './actions';
import {
  selectText,
  selectLoading,
  selectResponse,
  selectError
} from './selectors';
import { selectMenuItem as rootSelectMenuItemAction } from '../Root/actions';

const CustomResult = ({ title, loading, className, response, error }) => {
  if (loading) {
    return <Skeleton className={className} title active loading={loading} />;
  }

  if (response !== '' && response) {
    return <Result status="success" title="Successfully Found Account" className={className} />  
  }

  if (response !== '') {
    return <Result status="warning" title="Not Found Account" className={className} />  
  }

  if (error !== '') {
    return <Result status="error" title="Checking Failed" className={className} />  
  }

  return <Result title={title} className={className} />;
};

const QRCode = ({ history }) => {
  useInjectReducer({ key: 'qrcode', reducer });

  const dispatch = useDispatch();
  const text = useSelector(selectText);
  const loading = useSelector(selectLoading);
  const response = useSelector(selectResponse);
  const error = useSelector(selectError);

  const goToScan = () => {
    dispatch(resetState());
    dispatch(rootSelectMenuItemAction('scan'));
    history.push('/scan');
  };

  const check = () => {
    dispatch(checkQRCode());
  };

  return (
    <Layout className="QRCode">
      <div className="QRCodeResult">
        <div className="Text">{text}</div>
        <CustomResult
          className="Result"
          title="You haven't checked the QRCode out yet"
          loading={loading}
          response={response}
          error={error}
        />
        <div className="Actions">
          <Button className="new" type="danger" icon="scan" onClick={goToScan}>
            New QRCode
          </Button>
          <Button
            className="check"
            type="primary"
            loading={loading}
            icon="check"
            onClick={check}
          >
            Check
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(QRCode);
