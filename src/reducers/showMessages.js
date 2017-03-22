import { ADD_SHOW_MESSAGE } from '../actions/constants';
import shortid from 'shortid';

export default (state = [], action ={}) => {
  switch(action.type) {
    case ADD_SHOW_MESSAGE:
      return [
        ...state,
        {
            id:shortid.generate(),
            type:action.message.type,
            text:action.message.text
        }
      ];
      default: return state;
  }
}
