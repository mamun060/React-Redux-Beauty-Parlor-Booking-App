import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import './Assats/css/FormCss/ReactCalendar.css';
import 'react-calendar/dist/Calendar.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

