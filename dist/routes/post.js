"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var postController_1 = require("../controller/postController");
var routes = express_1["default"].Router();
routes.post('/createpost', postController_1.createPost);
exports["default"] = routes;
//# sourceMappingURL=post.js.map