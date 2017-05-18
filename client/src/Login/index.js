import React, { PropTypes } from 'react'
import VisibleTodoList from './Components/visibleTodoList';
import AddTodo from './Components/addTodo';

const Login = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
  </div>
);

export default Login;