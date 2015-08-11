import randomName from '../utils/randomName';

import {
  ADD_USER,
  SOFT_DELETE_USER,
  RESTORE_USER,
  DELETE_USER,
  SELECT_USER
} from '../ActionTypes';

const SOFT_DELETED = 'SOFT_DELETED';
const SELECTED = 'SELECTED';

export default function users(state = [], action) {
  switch(action.type) {
    case ADD_USER:
      return [{
        id: state.length === 0 ? 0 : state[0].id + 1,
        username: randomName()
      }, ...state];

    case SOFT_DELETE_USER:
      return state.map(user => 
        user.id === action.id
          ? Object.assign({}, user, { [SOFT_DELETED]: true })
         : user
      );

    case RESTORE_USER:
      return state.map(user =>
        user.id === action.id
          ? Object.assign({}, user, { [SOFT_DELETED]: false })
          : user
      );

    case DELETE_USER:
      return state.filter(user =>
        user.id !== action.id
      );

    case SELECT_USER:
      return state.map(user =>
        user.id === action.id
          ? Object.assign({}, user, { [SELECTED]: true })
          : user
      );

    default:
      return state;
  }
}

export const filterUsersBySoftDeleted = users => (
  users.filter(user => user[SOFT_DELETED])
);
export const filterUsersByNotSoftDeleted = users => (
  users.filter(user => !user[SOFT_DELETED])
);
export const filterUsersByInput = (users, input) => (
  input !== null && input.length >= 1
    ? users.filter(user => user.username
        .toLowerCase()
          .includes(input.toLowerCase())
      )
    : users
);