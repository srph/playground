import React from 'react';

import renderFullPage from './renderFullPage';
import App from '../../common/App';

// express middleware
// app.use(handlRender);
export default function handleRender(req, res) {
  const markup = React.renderToString(<App />);
  res.send(renderFullPage(markup)); 
}