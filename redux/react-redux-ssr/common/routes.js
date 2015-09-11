import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory  from 'history/lib/createBrowserHistory';

export default (
  <Route path="/" component={require('./App')}>
    <IndexRoute component={require('./views/home')} />
    <Route path="login" component={require('./views/login')} />
    <Route path="logout" component={require('./views/logout')} />
  </Route>
);