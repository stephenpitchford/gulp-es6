import gulp from 'gulp';
import del from 'del';

import config from './config';

export default gulp.task('clean', () => {
  console.log('clean');

  del([`${config.dist}/**/*`]).then(paths => {
      console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
