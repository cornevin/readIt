// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';


const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/about" component={About}/>
  </Switch>
);

export default Routes;