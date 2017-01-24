const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

function main ({port, dir, file, space}) {
	let id = 0;
	const app = express();
	app.use(compression({level: 9}));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(logRequest);
	app.use(express.static(dir));

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

	app.listen(port, () => {
		console.log('wigo listening on port ' + port);
	});
}

module.exports = main;
