import gulp from 'gulp';
import nodemon from 'gulp-nodemon';

import config from './config';

gulp.task('express', () => {
  nodemon({
    script: config.server.main,
    ext: 'js',
    watch: [
      config.server.main,
      config.server.base
    ],
    env: { 'NODE_ENV': 'development' }
  });
});
