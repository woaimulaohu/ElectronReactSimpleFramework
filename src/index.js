import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import * as serviceWorker from './serviceWorker';
import "./components/UI/admin-lte/plugins/fontawesome-free/css/all.min.css";
import "./components/UI/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "./components/UI/admin-lte/dist/css/adminlte.min.css";


ReactDOM.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
