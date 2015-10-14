import path from 'path'
import Express from 'express';
const app = new Express();
const port = 2001;

import React from 'react';
import { renderToString } from 'react-dom/server';
import Root from './Root';

app.use(require('serve-static')(path.join(__dirname, './')));
app.use((req, res, next) => {
  const markup = renderToString(<Root />);
  console.log(markup);
  res.send(renderFullPage(markup));
  next();
});

app.listen(port, function(err) {
  if ( err ) {
    console.error(err);
  } else {
    console.log(`Listening to port ${port}.`);
  }
})

function renderFullPage(markup) {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Hello, World</title>
        <meta charset="utf-8">
      </head>

      <body>
        <div id="mount">${markup}</div>
        <script src="./dist/script.js"></script>
      </body>
    </html>
  `;
}