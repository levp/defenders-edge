'use strict';

const gulp = require('gulp');

gulp.task('js', cb => jsTask(false, cb));
gulp.task('js:watch', cb => jsTask(true, cb));

function jsTask(watchMode, taskCallback) {
	const path = require('path');
	const webpack = require('webpack');
	const project = require('../project');

	const wpConfig = {
		watch: !!watchMode,
		mode: 'development',
		target: 'web',
		context: project.PROJECT_ROOT,
		entry: {
			'game': path.join(project.SOURCE_DIR, './ts/main.ts'),
		},
		output: {
			path: path.join(project.OUTPUT_DIR, './js/'),
			filename: '[name].js',
			pathinfo: true,
		},
		devtool: 'source-map',
		resolve: {
			extensions: ['.ts']
		},
		module: {
			rules: [
				{
					test: /\.ts$/,
					enforce: 'pre',
					loader: 'tslint-loader',
					options: {
						typeCheck: true,
					},
				},
				{
					test: /\.ts$/,
					loader: 'ts-loader',
				},
			],
		},
	};

	const wpCallback = (error, stats) => {
		if (error) {
			throw new Error(error);
		}

		console.log(stats.toString({
			colors: true,
		}));

		if (taskCallback) {
			taskCallback();
			taskCallback = null;
		}
	};

	webpack(wpConfig, wpCallback);
}
