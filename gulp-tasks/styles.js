import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import config from './config';
import {connect} from './serve';

export default gulp.task('styles', () => {
  gulp.src(`${config.app.styles}*.scss`)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${config.tmp.styles}`))
    .pipe(connect.reload());
});

gulp.task('styles:watch', function () {
  gulp.watch(`${config.app.base}**/*.scss`, ['styles']);
});
