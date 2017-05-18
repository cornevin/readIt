import { combineReducers } from 'redux'
import todos from './Login/reducer';
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

const App = combineReducers({
  todos,
  firebase
});

export default App;