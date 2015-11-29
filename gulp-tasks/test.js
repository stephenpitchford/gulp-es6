import gulp from 'gulp';
import config from './config';

gulp.task('test', ['unit', 'e2e']);
