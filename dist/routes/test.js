"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
exports.routes = (0, express_1.Router)();
var Test = require('../controller/userController').Test;
exports.routes.post('/login', Test);
module.exports = exports.routes;
//# sourceMappingURL=test.js.map