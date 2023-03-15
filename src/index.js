import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import Provider from './provider';
import { Result, Button } from 'antd';
import Board from '@/pages/board';
import Layout from '@/pages/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Router>
        <Routes >
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Board />} />
            <Route path="*" element={<Result status={"404"} title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary">Back Home</Button>} />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
