import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Menu, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import './style.css';

import QRCode from '../QRCode';
import Scan from '../Scan';
import Settings from '../Settings';

import { selectMenuItem } from './actions';
import { selectKey } from './selectors';

const { Footer, Content } = Layout;
const { Item } = Menu;

const getKey = () => {
  let key = window.location.pathname.substr(1);
  return key === '' ? 'qrcode' : key;
};

function Root() {
  const dispatch = useDispatch();
  const key = useSelector(selectKey);

  useEffect(() => {
    dispatch(selectMenuItem(getKey()));
  });

  const handleMenuClick = e => {
    dispatch(selectMenuItem(e.key));
  };

  return (
    <Layout className="RootLayout">
      <Router>
        <Content>
          <Switch>
            <Route path="/scan">
              <Scan />
            </Route>
            <Route exact path={['/', '/qrcode']}>
              <QRCode />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Content>
        <Footer className="RootLayoutFooter">
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[key]}
            mode="horizontal"
          >
            <Item key="scan">
              <Link to="/scan">
                <Icon type="scan" />
                Scan
              </Link>
            </Item>
            <Item key="qrcode">
              <Link to="/qrcode">
                <Icon type="qrcode" />
                QRCode
              </Link>
            </Item>
            <Item key="settings">
              <Link to="/settings">
                <Icon type="setting" />
                Settings
              </Link>
            </Item>
          </Menu>
        </Footer>
      </Router>
    </Layout>
  );
}

export default Root;
