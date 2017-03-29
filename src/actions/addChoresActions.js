import axios from 'axios';
import React from 'react';
export function addChoresRequest(category) {
  return dispatch => {
    console.log(`Inside client, ${category}`);
    return axios.get('api/chorecategory/'+category)
      .then((res) => {
        dispatch({ type:category, payload:res.data});
      }
      )
      .catch((err) => dispatch({type:'CHORES_ERROR', payload:err}))
  }
}
