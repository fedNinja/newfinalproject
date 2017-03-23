import { combineReducers} from 'redux';
import signUp from './signUpReducer';
import logIn from './loginReducer';

export default combineReducers({
  signUp, logIn
})
