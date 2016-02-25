import gulp from 'gulp';
import inject from 'gulp-inject';
import watch from 'gulp-watch';

import config from './config';
import {connect} from './serve';


gulp.task('inject', () => {
  let sources = gulp.src(`${config.app.components}**/*.js`, {read: false});

  gulp.src(`${config.app.base}index.html`)
    .pipe(inject(sources))
    .pipe(gulp.dest(`${config.tmp.base}`))
    .pipe(connect.reload());
});

gulp.task('inject:watch', function () {
  watch(`${config.app.components}**/*.js`, function () {
    gulp.start('inject');
  });
});
