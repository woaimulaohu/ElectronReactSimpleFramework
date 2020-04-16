import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginPage from './LoginPage';
import BackEndPage from './BackEndPage';
import * as serviceWorker from './serviceWorker';


// var s = document.querySelector("#jquery");
// s&&s.parentNode.removeChild(s);
// var script = document.createElement("script");
// script.id = "jquery";
// script.src = 'https://adminlte.io/themes/AdminLTE/bower_components/jquery/dist/jquery.min.js';
// document.body.appendChild(script);

// var s2 = document.querySelector("#adminlte");
// s2&&s2.parentNode.removeChild(s2);
// var script2 = document.createElement("script");
// script2.id = "adminlte";
// script2.src = 'https://adminlte.io/themes/AdminLTE/dist/js/adminlte.min.js';
// document.body.appendChild(script2);

// var s3 = document.querySelector("#bootstrap");
// s3&&s3.parentNode.removeChild(s3);
// var script3 = document.createElement("script");
// script3.id = "bootstrap";
// script3.src = 'https://adminlte.io/themes/AdminLTE/bower_components/bootstrap/dist/js/bootstrap.min.js';
// document.body.appendChild(script3);

// $script('./components/UI/admin-lte/plugins/jquery/jquery.min.js', function () {
//   $script('./components/UI/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js', function () {
//     $script('./components/UI/admin-lte/dist/js/adminlte.min.js', function () {
//       ReactDOM.render(
//         <React.StrictMode>
//           <BackEndPage />
//         </React.StrictMode>,
//         document.getElementById('root')
//       );

//       // If you want your app to work offline and load faster, you can change
//       // unregister() to register() below. Note this comes with some pitfalls.
//       // Learn more about service workers: https://bit.ly/CRA-PWA
//       serviceWorker.unregister();

//     });
//   });
// });
ReactDOM.render(
  <React.StrictMode>
    <BackEndPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


