'use strict';

const gulp = require('gulp');

gulp.task('dev-server', devServerTask);

async function devServerTask() {
	const path = require('path');
	const browserSync = require('browser-sync');
	const project = require('../project');

	const bs = browserSync.create();

	bs.init({
		server: {
			baseDir: project.OUTPUT_DIR,
			directory: false,
		},
		ui: false,
		online: false,
		ghostMode: false,
		files: [
			ext('html'),
			ext('css'),
			ext('js'),
		],
	});

	function ext(extension) {
		return path.join(project.OUTPUT_DIR, '**/*.' + extension);
	}
}
