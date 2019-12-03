import React, { useEffect } from "react";
import { Form, Input, Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import useInjectReducer from '../../common/utils/useInjectReducer';
import './style.css';

import { changeURL } from './actions';
import { selectURL } from './selectors';
import reducer from './reducers';

const Settings = () => {
  useInjectReducer({ key: 'settings', reducer });

  const dispatch = useDispatch();
  const url = useSelector(selectURL);

  useEffect(() => {
    localStorage.setItem('settings.url', url);
  }, [url]);

  const handleChangeURL = (e) => {
    dispatch(changeURL(e.target.value));
  }

  return (
    <Layout className="Settings">
      <Form className="SettingForm" layout="vertical">
        <Form.Item label="URL">
          <Input placeholder="http://..." value={url} onChange={handleChangeURL} />
        </Form.Item>
      </Form>
    </Layout>
  );
};

export default Settings;
