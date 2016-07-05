var express = require('express');
var bodyParser = require('body-parser');

function main (port, path, file) {
	var app = express();
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	app.use(logRequest);
	app.use(express.static(path));
	app.use('/*', express.static(file));
	    
	app.listen(port, () => {
		console.log('wigo listening on port ' + port);
	});
}

function logRequest (req, res, next) {
	var data = {
		path: req.url,
		method: req.method,
		headers: req.headers,
		body: req.body
	};

	console.log(JSON.stringify(data, null, 4));

	next();
}

module.exports = main;
