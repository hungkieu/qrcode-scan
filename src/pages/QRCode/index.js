import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Layout, Button, Result, Skeleton, Descriptions } from 'antd';
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

  if (Object.keys(response).length === 0 && error === '') {
    return <Result title={title} className={className} />;
  }

  if (error !== '') {
    return <Result status="error" title="Checking Failed" className={className} />  
  }

  if (Object.keys(response).length && !response.not_found) {
    return <Result status="success" title="Successfully Found Account" className={className} />  
  } 
  
  if (response.not_found) {
    return <Result status="warning" title="Not Found Account" className={className} />  
  }
};

const Response = ({ response }) => {
  if (Object.keys(response).length === 0) return <></>;
  const { full_name, tel, email, dob } =response;
  return <div className="Text">
    <Descriptions title="Account Info">
      <Descriptions.Item label="Full name">{full_name}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{tel}</Descriptions.Item>
      <Descriptions.Item label="Email">{email}</Descriptions.Item>
      <Descriptions.Item label="Day of birth">{dob}</Descriptions.Item>
    </Descriptions>
  </div>
}

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

  useEffect(() => {
    if(text) dispatch(checkQRCode());
  }, [dispatch, text]);

  return (
    <Layout className="QRCode">
      <div className="QRCodeResult">
        <CustomResult
          className="Result"
          title="You haven't checked the QRCode out yet"
          loading={loading}
          response={response}
          error={error}
        />
        <Response response={response} />
        <div className="Actions">
          <Button className="new" type="danger" icon="scan" onClick={goToScan}>
            New QRCode
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(QRCode);
