import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
      .then(res => dispatch({ type:'SIGNUP', payload:res.data}))
      .catch((err) => dispatch({type:'SIGNUP_ERROR', payload:err}))
  }
}

export function getSignupData(){
  return dispatch => {
    return axios.get('/api/users')
      .then(res => dispatch({ type:'GETUSERS', payload:res.data}))
      .catch((err) => dispatch({type:'SIGNUP_ERROR', payload:err}))
  }

}
