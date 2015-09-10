import renderFullPage from '../utils/renderFullPage';

export default function (req, res, next) {
  if ( !req.timedout ) {
    next();
  }
}