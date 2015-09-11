import 'babel/polyfill';

import React from 'react';
import { Provider } from 'react-redux';

export { INITIAL_STATE } from '../common/constants/Store';
import configureStore from '../common/store/configureStore';
import App from '../common/App';

const initialState = window[INITIAL_STATE];
const store = configureStore(initialState);
const mountNode = document.getElementById('mount');

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  mountNode
);