'use strict';

require('./tasks/clean.task');
require('./tasks/html.task');
require('./tasks/css.task');
require('./tasks/js.task');
require('./tasks/dev-server.task');

const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', cb => runSequence('clean', ['html', 'css', 'js'], cb));
gulp.task('watch', cb => runSequence('clean', ['html:watch', 'css:watch', 'js:watch'], cb));
gulp.task('serve', cb => runSequence('watch', 'dev-server', cb));
