'use strict';

const path = require('path');
const gulp = require('gulp');
const project = require('../project');

gulp.task('css', cssTask);
gulp.task('css:watch', ['css'], cssWatchTask);

function cssTask() {
	const sourcemaps = require('gulp-sourcemaps');
	const rename = require('gulp-rename');
	const sass = require('gulp-sass');

	const outputDir = path.join(project.OUTPUT_DIR, './css/');

	return gulp.src('sass/main.scss', {cwd: project.SOURCE_DIR})
			.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(rename('style.css'))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(outputDir));
}

function cssWatchTask() {
	gulp.watch('sass/**/*.scss', {cwd: project.SOURCE_DIR}, ['css']);
}
