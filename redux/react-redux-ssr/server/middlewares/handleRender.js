import React from 'react';
import App from '../../common/App.jsx';

// express middleware
// app.use(handlRender);
export default function handleRender(req, res) {
  const markup = React.renderToString(<App />);
  res.send(renderFullPage(markup));
}

function renderFullPage(markup) {
  return `
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, World</title>
    <meta charset="utf-8">
  </head>

  <body>
    <div id="mount">
      ${markup}
    </div>

    <script src="./dist/script.js"></script>
  </body>
</html>
  `;
}