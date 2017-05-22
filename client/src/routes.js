// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { BrowserRouter as Router } from 'react-router-dom';

import App from './Login'
import Room from './Room'


const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/Room" component={Room}/>
  </Switch>
);

export default Routes;