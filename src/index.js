import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

if('serviceWorker' in navigator){
  
  navigator.serviceWorker.register('sw.js')
  .then(function(registeration) {
    
    console.log('Register successful, scope is:', registeration.scope);

  }).catch(function(error){
    
    console.log('Service worker registeration failed, error:', error);

  })
}