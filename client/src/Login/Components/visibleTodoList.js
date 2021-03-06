import { connect } from 'react-redux'
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
  return {
    todos: getVisibleTodos(state.todos)
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  undefined
)(TodoList)

export default VisibleTodoList;