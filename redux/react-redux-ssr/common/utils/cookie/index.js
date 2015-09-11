import cookie from 'cookie';

const server = {
  req: null,
  res: null
};

export default {
  get(key) {
    return isBrowser()
      ? cookie.parse(document.cookie)[key]
      : server.req.cookies[key];
  },

  set(key, val, opts) {
    if ( isBrowser() ) {
      document.cookie = cookie.serialize(key, val, opts);
    } else {
      server.res.cookie(key, val, opts);
    }

    return this;
  },

  remove(key, opts = {}) {
    opts.expires = new Date(0);
    
    if ( isBrowser() ) {
      document.cookie = cookie.serialize(key, '', opts);
    } else {
      server.res.clearCookie(key, '', opts);
    }

    return this;
  },
  
  init({ req, res }) {
    server.req = req;
    server.res = res;
  }
};
