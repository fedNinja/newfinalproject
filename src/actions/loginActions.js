import axios from 'axios';
import React from 'react';
import {browserHistory} from 'react-router';

export function userLoginRequest(userName, password) {

  return dispatch => {
    return axios.post('/api/user', {userName, password})
      .then((res) => {
        console.log(`Inside the client${res.data}`);
        dispatch({ type:'LOGIN', payload:res.data});
        browserHistory.push('/');
      }
      )
      .catch((err) => dispatch({type:'LOGIN_ERROR', payload:err}))
  }
}
