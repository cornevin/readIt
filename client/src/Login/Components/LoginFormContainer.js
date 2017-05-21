import { connect } from 'react-redux'
import { submitLoginForm } from '../actions'
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
      onSubmit: (email, password) => {
        dispatch(submitLoginForm(email, password));
      }
    }
}

const LoginFormContainer = connect(
  undefined,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer;