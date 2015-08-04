import {
  ADD_USER,
  SOFT_DELETE_USER,
  DELETE_USER,
  RESTORE_USER,
  SELECT_USER
} from '../ActionTypes';

export function addUser(data) {
  return {
    type: ADD_USER,
    ...data
  };
}

export function softDeleteUser(id) {
  return {
    type: SOFT_DELETE_USER,
    id
  };
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id
  };
}

export function restoreUser(id) {
  return {
    type: RESTORE_USER,
    id
  };
}

export function selectUser(id) {
  return {
    type: SELECT_USER,
    id
  };
}
