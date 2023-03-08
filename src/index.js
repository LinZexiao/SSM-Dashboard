import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Provider } from './provider';
import enUS from 'antd/locale/en_US';
import zhCN from 'antd/locale/zh_CN';
import Provider from './provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
