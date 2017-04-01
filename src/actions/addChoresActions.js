import axios from 'axios';
import React from 'react';

const RECIEVE_DATA = 'RECIEVE_DATA';
const RecieveData= (chores) => {
  return {
    type: RECIEVE_DATA,
    chores
  }
}

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

export function assignChoreRequest(childId, chore) {
  return dispatch => {
    return axios.put(('api/assignChores/'+ childId), {chore})
      .then((res) => {
        console.log(`Inside res ${res}`);
        dispatch(RecieveData(res.data));
      }
      )
      .catch((err) => dispatch({type:'CHORES_ERROR', payload:err}))
  }
}
