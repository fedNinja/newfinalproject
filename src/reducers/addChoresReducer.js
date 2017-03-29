const initialState ={
  category:"",
  chores:[],
  errorMessage:""
}

export default function reducer(state = initialState, action){
  switch(action.type){
    case 'Household_Chores':{
      console.log(`Inside the reducer ${JSON.stringify(action)}`);
      return {
        category:"Household_Chores",
        chores:action.payload.chores
      }
    }
    case 'Mealtime_Chores':{
      console.log(`Inside the reducer ${JSON.stringify(action)}`);
      return {
        category:"Mealtime_Chores",
        chores:action.payload.chores
      }
    }
    case 'CHORES_ERROR':{
      return {
        ...state,
        errorMessage: action.payload.message
      }
    }
  }
  return state;
}
