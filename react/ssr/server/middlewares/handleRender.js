import React from 'react';

import mockApi from '../utils/mockApi';
import renderFullPage from '../utils/renderFullPage';
import App from '../../common/App';

// express middleware
// app.use(handlRender);
export default function handleRender(req, res, next) {
  mockApi(function() {
    if ( !req.timedout ) {
      const markup = React.renderToString(<App />);
      res.send(renderFullPage(markup));
    } else {
      next();
    }
  });

  req.once('timeout', function() {
    res.send(renderFullPage('<div style="width: 100%; height: 100vh; background: red">An error occured!</div>'));
  });
}