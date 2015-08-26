import React from 'react';
import { Router, Route } from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './App';
import Home from './components/Home';
import About from './components/About';
import Friends from './components/Friends';
import FriendsList from './components/FriendsList';

export default (
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="about" component={About} />
      <Route path="friends" component={Friends}>
        <Route path="list" component={FriendsList} />
      </Route>
    </Route>
  </Router>
);