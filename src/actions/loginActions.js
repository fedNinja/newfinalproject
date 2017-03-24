import axios from 'axios';

export function userLoginRequest(userData) {
  const {userName} = userData;
  console.log({userName});
  return dispatch => {
    return axios.post('/api/user', {userName})
      .then((res) => {
        console.log(`Inside the client${res.data}`);
        dispatch({ type:'LOGIN', payload:res.data})
      }
      )
      .catch((err) => dispatch({type:'LOGIN_ERROR', payload:err}))
  }
}
