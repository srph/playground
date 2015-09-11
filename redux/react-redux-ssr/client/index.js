import 'babel/polyfill';

import React from 'react';
import exportReactToWindow from '../common/utils/react/exportReactToWindow';

import { Provider } from 'react-redux';
import { INITIAL_STATE } from '../common/constants/Store';
import configureStore from '../common/store/configureStore';

import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../common/routes';

const initialState = window[INITIAL_STATE];
const store = configureStore(initialState);

React.render(
  <Provider store={store}>
    {() => <Router history={createBrowserHistory()} children={routes} />}
  </Provider>,
  document.getElementById('mount')
);

exportReactToWindow();