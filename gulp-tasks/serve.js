import gulp from 'gulp';
import connect from 'gulp-connect';
import config from './config';

const dev = [config.app.base, config.tmp.base];

export default gulp.task('serve', ['styles', 'styles:watch', 'express'], () => {

  connect.server({
    root: dev,
    port: config.ports.staticServer,
    livereload: {
      port: config.ports.livereloadServer
    }
  });

});

export {connect};
