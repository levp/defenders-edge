'use strict';

const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '../');
const SOURCE_DIR = path.join(PROJECT_ROOT, './src/');
const OUTPUT_DIR = path.join(PROJECT_ROOT, './dist/');

module.exports = {
	PROJECT_ROOT,
	SOURCE_DIR,
	OUTPUT_DIR,
};
