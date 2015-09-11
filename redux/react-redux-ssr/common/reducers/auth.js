import {
  FETCH_AUTH_DATA,
  FETCH_AUTH_DATA_COMPLETED,
  FETCH_AUTH_DATA_FAILED
} from '../constants/ActionTypes';

const initialState = {
  data: {},
  isFetching: false,
  isFetchingFailed: false
};

export default function(state = initialState, payload) {
  switch(payload.type) {
    case FETCH_AUTH_DATA:
      return {
        ...state,
        isFetching: true,
        isFetchingFailed: false
      };
    case FETCH_AUTH_DATA_FAILED:
      return {
        ...state,
        isFetching
      }
    case FETCH_AUTH_DATA_COMPLETED:
      return {
        ...state,
        isFetching: false,
        data: payload.data
      };
    case FETCH_AUTH_DATA_FAILED:
      return {
        ...state,
        isFetchingFailed: true
      };
    default:
      return state;
  };
};