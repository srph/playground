import React, { renderToString } from 'react';

import { Provider } from 'react-redux';
import configureStore from '../../common/store/configureStore';

import createLocation from 'history/lib/createLocation';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { useRoutes, createRoutesFromReactChildren } from 'react-router';
import RoutingContext from 'react-router/lib/RoutingContext';
import routes from '../../common/routes';

import { INITIAL_STATE } from '../../common/constants/Store';

// express middleware
// app.use(handlRender);
export default function handleRender(req, res) {
  const location = createLocation(req.path, req.query);
  const history = useRoutes(createMemoryHistory)({
    routes: createRoutesFromReactChildren(routes)
  });

  history.match(location, (err, state) => {
    if ( err ) {
      return res.send('An error occured');
    }

    const store = configureStore();
    const markup = renderToString(
      <Provider store={store} >
        {() => <RoutingContext history={history} {...state} />}
      </Provider>
    );

    const finalState = store.getState();
    res.send(renderFullPage(markup, finalState));
  });
}

function renderFullPage(markup, initialState) {
  return `
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, World</title>
    <meta charset="utf-8">
  </head>

  <body>
    <div id="mount">${markup}</div>

    <script>
      window['${INITIAL_STATE}'] = ${JSON.stringify(initialState)};
    </script>
    <script src="script.js"></script>
  </body>
</html>
  `;
}