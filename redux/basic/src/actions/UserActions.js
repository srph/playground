import {
  ADD_USER,
  REMOVE_USER
} from '../constants/ActionTypes';

export const addUser = (username) => {
  return {
    type: ADD_USER,
    payload: username
  };
}

export const removeUser = (index) => {
  return {
    type: REMOVE_USER,
    payload: index
  };
}