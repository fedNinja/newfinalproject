
const initialState = {
  userName:null,
  password:null,
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'LOGIN':{
      return {
        userName:action.payload.userName,
        password:action.payload.password
      }
    }
    case 'LOGIN_ERROR':{
      return {
        ...state,
        error:action.payload
      }
    }
  }
  return state;
}
