// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import App from './Login'
import Room from './Room'

import LoggedInRoute from './core/LoggedInRoute'



const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={App}/>
    <LoggedInRoute exact path="/Room" component={Room}/>
  </Switch>
);

export default Routes;