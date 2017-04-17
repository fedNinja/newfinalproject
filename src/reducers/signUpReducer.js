
const initialState = {
  userName:null,
  password:null,
  passwordConfirmation:null,
  email:null
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'SIGNUP':{
      return {
        userName:action.payload.userName,
        password:action.payload.password,
        email:action.payload.email
      }
    }
    case 'SIGNUP_ERROR':{
      return {
        ...state,
        error:action.payload
      }
    }
    case 'GETUSERS':{
      return {
        ...state,
        userName:action.payload.userName,
        password:action.payload.password,
        email:action.payload.email
      }
    }
    default:
      return state;
  }
}
