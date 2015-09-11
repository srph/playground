import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);
  return store;
}