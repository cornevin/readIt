import { connect } from 'react-redux'
import { toggleTodo } from '../App/action'
import TodoList from '../todolist';

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

export default VisibleTodoList