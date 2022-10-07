"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var profileController_1 = require("../controller/profileController");
var routes = express_1["default"].Router();
routes.post('/', profileController_1.createProfile);
exports["default"] = routes;
//# sourceMappingURL=profile.js.map