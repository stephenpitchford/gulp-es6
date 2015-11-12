import gulp from 'gulp';
import * as connect from 'gulp-connect';
import {config} from './config';

const dirs = {
  tmp: '.tmp',
  src: 'src',
  dist: 'dist'
};

const dev = [dirs.src, dirs.tmp];

export default gulp.task('serve', () => {

  connect.server({
    root: dev,
    port: config.ports.staticServer,
    livereload: {
      port: config.ports.livereloadServer
    }
  });

});
