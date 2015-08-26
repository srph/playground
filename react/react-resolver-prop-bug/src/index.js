// http://babeljs.io/docs/usage/polyfill/
require('babel/polyfill');

import React from 'react'
import { Resolver } from 'react-resolver';
import routes from './routes';

Resolver.render(routes, document.getElementById('root'));