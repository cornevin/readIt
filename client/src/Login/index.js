import React, { PropTypes } from 'react'
import VisibleTodoList from './Components/visibleTodoList';
import AddTodo from './Components/LoginFormContainer';

const Login = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
  </div>
);

export default Login;