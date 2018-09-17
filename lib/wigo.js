const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const url = require('url');

function main ({port, dir, file, space, slashes}) {
	let id = 0;
	const app = express();
	app.use(compression({level: 9}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(logRequest);

	if (slashes) {
		app.use(rewriteUrlsWithoutTrailingSlash);
	}

	app.use(express.static(dir, { dotfiles: 'allow' }));

	if (file) {
		app.use('/*', express.static(file));
	}

	function logRequest (req, res, next) {
		const data = {
			id: ++id,
			path: req.url,
			method: req.method,
			headers: req.headers,
			body: req.body
		};

		console.log(JSON.stringify(data, null, space));

		next();
	}

	function rewriteUrlsWithoutTrailingSlash (req, res, next) {
		let uri = url.parse(req.url);

		if (/\/[^/\.]+[^\/]$/.test(uri.pathname)) {
			uri.pathname += '/';
			req.url = uri.pathname + (uri.search || '');
		}

		next();
	}

	app.listen(port, () => {
		console.log('wigo listening on port ' + port);
	});
}

module.exports = main;
