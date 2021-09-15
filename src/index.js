import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Restarent from './component/Restarent';
import UseState from './component/Hooks/UseState';
import UseEffect from './component/Hooks/UseEffect';
import UseReducer from './component/Hooks/UseReducer';


ReactDOM.render(
  <React.StrictMode>
     <Navbar />
    {/* <Restarent/> */}
    {/* <UseState/> */}
    {/* <UseEffect/> */}
    <UseReducer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
