import gulp from 'gulp';
import watch from 'gulp-watch';
import {config} from './config';

export default gulp.task('watch', () => {
  watch({ glob: [config.paths.src.styles]}, ['styles']);
});
