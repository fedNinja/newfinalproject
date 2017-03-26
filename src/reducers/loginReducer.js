
const initialState = {
  userName:"",
  password:"",
  errorMessage:""
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'LOGIN':{
      console.log(`Inside the reducer ${JSON.stringify(action)}`);
      return {
        userName:action.payload.users.userName,
        password:action.payload.users.password
      }
    }
    case 'LOGIN_ERROR':{
      return {
        ...state,
        errorMessage: action.payload.message
      }
    }
  }
  return state;
}
