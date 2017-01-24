const mochaEslint = require('mocha-eslint');

mochaEslint([
	'./bin/**/*',
	'./lib/**/*.js',
	'./test/**/*.js'
]);
