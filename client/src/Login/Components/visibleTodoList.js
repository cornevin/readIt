import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from './todoList';

const getVisibleTodos = (todos) => {
    console.log(todos);
    if(!todos) {
        console.log("in if");
        return [];
    }
  return todos;
}

const mapStateToProps = (state) => {
  console.log('state : ');
  console.log(state);
  return {
    todos: getVisibleTodos(state.todos)
  }
}


const VisibleTodoList = connect(
  mapStateToProps,
  undefined
)(TodoList)

export default VisibleTodoList;