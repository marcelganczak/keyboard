"use strict";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './client')));
app.use(require('./routes/index'));
module.exports = app;
//# sourceMappingURL=app.js.map