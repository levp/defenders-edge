'use strict';

const gulp = require('gulp');
const project = require('../project');

gulp.task('html', htmlTask);
gulp.task('html:watch', ['html'], htmlWatchTask);

function htmlTask() {
	return gulp.src('index.html', {cwd: project.SOURCE_DIR})
			.pipe(gulp.dest(project.OUTPUT_DIR));
}

async function htmlWatchTask() {
	gulp.watch('index.html', {cwd: project.SOURCE_DIR}, ['html']);
}
