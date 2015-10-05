import {
  ADD_USER,
  REMOVE_USER
} from '../constants/ActionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_USER:
      return state.concat({
        username: action.payload
      });
    case REMOVE_USER:
      return state.filter((user, index) => {
        return action.payload !== index;
      });
    default:
      return state;
  }
}