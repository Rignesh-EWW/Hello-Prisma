"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// import { app } from './app';
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var user_1 = __importDefault(require("./routes/user"));
var port = 3002;
app.use(express_1["default"].json());
app.use(user_1["default"]);
app.listen(port, function () {
    console.log("Server is running on ".concat(port));
});
//# sourceMappingURL=server.js.map