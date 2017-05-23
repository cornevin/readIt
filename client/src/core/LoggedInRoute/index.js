import React from 'react'

import { Redirect, Route } from 'react-router-dom'


const LoggedInRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    false ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default LoggedInRoute