import React from "react";
import ReactDOM from "react-dom";
import Root from "./pages/Root";
import { Provider } from 'react-redux';
import store from './store';
import 'antd/dist/antd.css';
import "./styles.css";

window.store = store;

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

const startApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}

