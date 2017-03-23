import axios from 'axios';

export function userLoginRequest(userData) {
  const {userName} = userData;
  console.log({userName});
  return dispatch => {
    return axios.get('/api/users/:id', {userName})
      .then(res => {
        console.log(res);
        dispatch({ type:'LOGIN', payload:res.data})})
      .catch((err) => dispatch({type:'LOGIN_ERROR', payload:err}))
  }
}
