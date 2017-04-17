import axios from 'axios';
import {browserHistory} from 'react-router';

export function userLoginRequest(userName, password) {

  return dispatch => {
    return axios.post('/api/user', {userName, password})
      .then((res) => {
        dispatch({ type:'LOGIN', payload:res.data});
        browserHistory.push('/addchores');
      }
      )
      .catch((err) => dispatch({type:'LOGIN_ERROR', payload:err}))
  }
}
