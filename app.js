const http = require('http');

const moduleOne = require('./js/port');
const help = require('./js/help');

http.createServer(help.onRequest).listen(moduleOne.port);