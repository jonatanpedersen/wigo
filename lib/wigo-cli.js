var wigo = require('./wigo');
var path = require('path');
var port = parseInt(process.argv[2]);
var absolutePath = path.join(process.cwd(), process.argv[3] || '.');
var file = process.argv[4];
wigo(port, absolutePath, file);
