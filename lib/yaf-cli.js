var yaf = require('./yaf');
var path = require('path');
var port = parseInt(process.argv[2]);
var absolutePath = path.join(process.cwd(), process.argv[3] || '.');
yaf(port, absolutePath);
