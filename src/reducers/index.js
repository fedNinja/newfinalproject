import { combineReducers} from 'redux';
import signUp from './signUpReducer';
import logIn from './loginReducer';
import chores from './addChoresReducer';

export default combineReducers({
  signUp,
  logIn,
  chores
})
