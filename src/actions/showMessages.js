import { ADD_SHOW_MESSAGE } from './constants';

export function addShowMessage(message) {
  return {
    type:ADD_SHOW_MESSAGE,
    message
  }
}
