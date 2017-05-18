// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import app from './rootReducer';

import { BrowserRouter } from 'react-router-dom'

import App from './App';

import Routes from './routes';

import './index.css';

let store = createStore(app);


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))