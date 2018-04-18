"use strict";
var express = require('express');
var path = require('path');
var router = express.Router();
router.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});
module.exports = router;
//# sourceMappingURL=index.js.map