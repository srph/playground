/**
 * Redux instance is exported from this file
 *, just so we don't have to pollute the main file with code
 * it doesn't have to contain.
 */
import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;