import gulp from 'gulp';
import inject from 'gulp-inject';

import config from './config';

gulp.task('inject', () => {
  let sources = gulp.src(`${config.app.components}**/*.js`, {read: false});
  gulp.src(`${config.app.base}index.html`)
    .pipe(inject(sources))
    .pipe(gulp.dest(`${config.tmp.base}`));
});
