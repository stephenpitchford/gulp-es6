const dirs = {
  app: 'app/',
  tmp: '.tmp/',
  dist: 'dist/',
  server: 'lib/',

  styles: 'styles/',
  images: 'images/'
};

const config = {
  app: {
    base: dirs.app,
    styles: `${dirs.app}${dirs.styles}`,
    images: `${dirs.app}${dirs.images}`
  },
  tmp: {
    base: dirs.tmp,
    styles: `${dirs.tmp}${dirs.styles}`
  },
  dist: {
    base: dirs.dist,
  },
  server: {
    main: `server.js`,
    base: dirs.server
  },
  ports: {
    staticServer: 9999,
    livereloadServer: 35769
  }
};


export default config;
