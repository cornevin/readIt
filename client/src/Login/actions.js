import firebase from '../firebase'

let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const submitLoginForm = (email, password) => {
  return (dispatch) => {
    // dispatch(requestPosts(subreddit)) TODO : Here should dispatch the fact a request is sent
    return firebase.createUserWithEmailAndPassword(email, password).then(user => {
      dispatch(userCreated(user))
    }).catch(error => {
        console.log(error);
    })
  }
}

export const userCreated = (user) => {
  return (dispatch) => {
    firebase.databaseSet('/users/' + user.uid, extractUserProperties(user))
      .then(() => {
        dispatch(authLoggedIn(extractUserProperties(user)))
      }).catch(error => {
        console.log(error)
      })
  }
}

export const authLoggedIn = (user) => {
  return {
    type: 'AUTH_LOGGED_IN_SUCCESS',
    user
  }
}

function extractUserProperties(firebaseUser) {

  const user = {};
  const userProperties = [
    'email',
    'refreshToken',
    'uid',
  ];

  userProperties.map((prop) => {
    if (prop in firebaseUser) {
      user[prop] = firebaseUser[prop];
    }
  });

  return user;
}