"use strict";
var app = require('./app');
var http = require('http');
var port = 8090;
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('listening', function () { console.log('Listening on ' + port); });
//# sourceMappingURL=www.js.map