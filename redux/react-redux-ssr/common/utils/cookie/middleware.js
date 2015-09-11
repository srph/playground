import cookie from './index';

export default function(req, res, next) {
  cookie.init({
    req,
    res
  });

  next();
}
