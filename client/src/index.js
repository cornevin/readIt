// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import app from './rootReducer';

import { BrowserRouter } from 'react-router-dom'

import App from './App';

import './index.css';

import FirebaseApi from './firebase';

const loggerMiddleware = createLogger()

let store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);


FirebaseApi.initAuth()
  .then(
    user => {
      ReactDOM.render(
        <Provider store={store}>
          <BrowserRouter>
             <App />
          </BrowserRouter>
        </Provider>,
        document.getElementById('root')
      );

      if (module.hot) {
        module.hot.accept('./App', () => {
          ReactDOM.render(
              <Provider store={store}>
                <BrowserRouter>
                   <App />
                </BrowserRouter>
              </Provider>,
            document.getElementById('root')
          );
        });
      }
    })
  .catch(
    error => {
      console.error('error while initializing Firebase Auth'); // eslint-disable-line no-console
      console.error(error); // eslint-disable-line no-console
    });