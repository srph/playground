import {
  FETCH_AUTH_DATA,
  FETCH_AUTH_DATA_COMPLETED,
  FETCH_AUTH_DATA_FAILED
} from '../constants/ActionTypes';

export const fetchAuthDataStart = () => {
  return {
    type: FETCH_AUTH_DATA
  };
};

export const fetchAuthDataCompleted = (data) => {
  return {
    type: FETCH_AUTH_DATA_COMPLETED,
    data
  };
};

export const fetchAuthDataFailed = (err) => {
  return {
    type: FETCH_AUTH_DATA_COMPLETED,
    err
  };
};

export const fetchAuthData = () => {
  return dispatch => {
    dispatch(fetchAuthData());
    
    api((err, data) => {
      if ( err ) {
        return dispatch(fetchAuthDataFailed(err));
      }

      dispatch(fetchAuthDataCompleted(data));
    });
  }
}