import React from 'react';

import mockApi from './mockApi';
import renderFullPage from './renderFullPage';
import App from '../../common/App';

// express middleware
// app.use(handlRender);
export default function handleRender(req, res) {
  mockApi(function() {
    const markup = React.renderToString(<App />);
    res.send(renderFullPage(markup)); 
  });
}