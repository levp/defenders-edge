'use strict';

const gulp = require('gulp');

gulp.task('clean', () => {
	const del = require('del');
	const project = require('../project');

	return del([
		project.OUTPUT_DIR,
	]);
});
